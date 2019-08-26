package com.board.action;

import java.util.HashMap;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.board.db.Board;
import com.board.db.BoardDAO;
import com.controller.action.CommandAction;

public class ContentAction implements CommandAction {

	@Override
	public String requestPro(HttpServletRequest request, HttpServletResponse response) throws Throwable {
		
		String idx2 = request.getParameter("idx");
		int idx = Integer.parseInt(idx2);
		
		int moNum = Integer.parseInt(request.getParameter("moNum"));
		HashMap<String, Object> map = new HashMap<String, Object>();
		map.put("idx", idx);
		map.put("moNum", moNum);
		Board article = BoardDAO.getInstance().getArticle(map);

		request.setAttribute("article", article);
		
		return "content.jsp?moNum="+moNum;
	}

}
