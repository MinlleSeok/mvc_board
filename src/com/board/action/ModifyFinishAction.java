package com.board.action;

import java.io.PrintWriter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.board.db.Board;
import com.board.db.BoardDAO;
import com.controller.action.CommandAction;

/*
 * board ModifyFinish Action
 */

public class ModifyFinishAction implements CommandAction {

	@Override
	public String requestPro(HttpServletRequest request, HttpServletResponse response) throws Throwable {

		///////////////////////////////////////////////////
		// 초기 받아온 값 변수 저장
		///////////////////////////////////////////////////

		request.setCharacterEncoding("UTF-8");
		response.setContentType("contentType=text/html; charset=UTF-8");
		response.setCharacterEncoding("UTF-8");

		int count = 0;
		String title = "";
		String content = "";
		int moNum = 0;
		int pin = 0;

		String[] files2 = request.getParameterValues("files");
		
		String regip = request.getRemoteAddr();
		int idx = Integer.parseInt(request.getParameter("idx"));
		title = request.getParameter("title"); // "제목입니다.";
		content = request.getParameter("content");

		if (request.getParameter("moNum") != null && !(request.getParameter("moNum").trim().equals(""))
				&& !(request.getParameter("moNum").trim().equals("null"))) {
			moNum = Integer.parseInt(request.getParameter("moNum"));
		}

		if (request.getParameter("pin") != null && !(request.getParameter("pin").trim().equals(""))
				&& !(request.getParameter("pin").trim().equals("null"))) {
			if (request.getParameter("pin").equals("on")) {
				pin = 1;
			}
		}

		PrintWriter out = response.getWriter();

		///////////////////////////////////////////////////
		// 유효성 검사
		///////////////////////////////////////////////////

		boolean check = false;
		String checkMsg = "";

		if (title == "" || title == null) {
			checkMsg += "title이 null입니다. \\n";
			check = true;
		}


		if (content == "" || content == null) {
			checkMsg += "content가 null입니다.";
			check = true;
		}

		if (check == true) {

			out.println("<script>alert('" + checkMsg + "');</script>");
			out.println("<script>window.history.go(-1);</script>");
			return null;

		} else {

			Board article = new Board();
			article.setContent(content);
			article.setCount(count);
			article.setRegip(regip);
			article.setTitle(title);
			article.setMoNum(moNum);
			article.setPin(pin);
			article.setIdx(idx);

			BoardDAO.getInstance().updateArticle(article);

			if (request.getParameterValues("files") != null) {
				int[] files = new int[files2.length];
				for (int i = 0; i < files2.length; i++) {
					files[i] = Integer.parseInt(files2[i]);
					BoardDAO.getInstance().updateFiles(files[i]);
				}
			}
			
			request.setAttribute("url", "list.do?moNum=" + moNum);
			return "redirect2.jsp";
		}
	}
}
