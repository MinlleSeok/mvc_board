package com.board.action;

import java.io.File;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.regex.Pattern;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.board.db.Board;
import com.board.db.BoardDAO;
import com.controller.action.CommandAction;

public class InsertAction implements CommandAction {

	@Override
	public String requestPro(HttpServletRequest request, HttpServletResponse response) throws Throwable {
		
		///////////////////////////////////////////////////
		// 초기 받아온 값 변수 저장
		///////////////////////////////////////////////////
		
		request.setCharacterEncoding("UTF-8");
		response.setContentType("contentType=text/html; charset=UTF-8");
		response.setCharacterEncoding("UTF-8");

		
		int sizeLimit = 10 * 1024 * 1024;
		int page = 0;
		int count = 0;
		String savePath = request.getRealPath("/upload");
		String title = "";
		String writer = "";
		String content = "";
		String filename = "";
		int moNum = 0;
		String regip = request.getRemoteAddr();

			title = request.getParameter("title"); // "제목입니다.";
			writer = request.getParameter("writer"); // "작성자이름";
			content = request.getParameter("content");
			moNum = Integer.parseInt(request.getParameter("moNum"));
			
			if(request.getParameter("page") != null) {
				page = Integer.parseInt(request.getParameter("page"));
			}


		PrintWriter out = response.getWriter();
		
		///////////////////////////////////////////////////
		// 유효성 검사
		///////////////////////////////////////////////////
		
		boolean check = false;
		String checkMsg = "";
		
		if(title == "" || title == null) {
			checkMsg += "title이 null입니다. \\n";
			check = true;
		}
		
		if(writer == "" || writer == null) {
			checkMsg += "writer가 null입니다. \\n";
			check = true;
		}
		
		if(content == "" || content == null){ 
			checkMsg += "content가 null입니다.";
			check = true;
		}
		
		if(check == true) {
			
			out.println("<script>alert('"+checkMsg+"');</script>");
			out.println("<script>window.history.go(-1);</script>");
			
		} else {
	
			Board article = new Board();
			article.setContent(content);
			System.out.println(content);
			article.setCount(count);
			article.setRegip(regip);
			article.setTitle(title);
			article.setWriter(writer);
			article.setMoNum(moNum);
			if(filename != null) {
			article.setFilename(filename);
			}
			BoardDAO.getInstance().insertArticle(article);

		}
		
		
		//request.setAttribute("page", page);
		
		return "list.do?moNum="+moNum;
	}

}
