package com.board.action;

import java.io.File;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.board.bean.Board;
import com.board.controller.CommandAction;
import com.board.dao.BoardDAO;

public class DeleteAction implements CommandAction {

	@Override
	public String requestPro(HttpServletRequest request, HttpServletResponse response) throws Throwable {
		int idx = Integer.parseInt(request.getParameter("idx"));
		
		Board article = BoardDAO.getInstance().getArticle(idx);
		String filename = article.getFilename();
		String uploadFileName = request.getRealPath("/upload")+"/"+filename;
		
		File uploadfile = new File(uploadFileName);
		if(uploadfile.exists() && uploadfile.isFile()) {
			uploadfile.delete();
		}
		
		BoardDAO.getInstance().deleteArticle(idx);
		
		request.setAttribute("url", "list.do");
		
		return "redirect2.jsp";
	}

	
}
