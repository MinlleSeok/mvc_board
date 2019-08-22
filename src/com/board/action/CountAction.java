package com.board.action;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.board.db.Board;
import com.board.db.BoardDAO;
import com.controller.action.CommandAction;

public class CountAction implements CommandAction {

	@Override
	public String requestPro(HttpServletRequest request, HttpServletResponse response) throws Throwable {
		
		int idx = Integer.parseInt(request.getParameter("idx"));
		
		Board article = BoardDAO.getInstance().getArticle(idx);
		
		String regip = request.getRemoteAddr();
		
		if(!regip.equals(article.getRegip())) {
			int count = article.getCount();
			article.setCount(count++);
			BoardDAO.getInstance().setArticleCount(article);
		}
		request.setAttribute("url", "content.do?idx="+idx);
		return "redirect2.jsp";
	}

}
