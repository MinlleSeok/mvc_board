package com.board.action;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.board.bean.Board;
import com.board.controller.CommandAction;
import com.board.dao.BoardDAO;

public class ContentAction implements CommandAction {

	@Override
	public String requestPro(HttpServletRequest request, HttpServletResponse response) throws Throwable {
		
		String idx2 = request.getParameter("idx");
		int idx = Integer.parseInt(idx2);
		
		Board article = BoardDAO.getInstance().getArticle(idx);
	
		request.setAttribute("article", article);
		
		return "content.jsp";
	}

}
