package com.board.action;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.controller.action.CommandAction;

/*
 * board write Action
 */

public class WriteAction implements CommandAction{

	@Override
	public String requestPro(HttpServletRequest request, HttpServletResponse response) throws Throwable {
		request.setCharacterEncoding("UTF-8");
		int moNum = Integer.parseInt(request.getParameter("moNum"));
		return "write.jsp?moNum="+moNum;
	}

}
