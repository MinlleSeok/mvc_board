package com.community.action;

import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.community.db.Community;
import com.community.db.CommunityDAO;
import com.controller.action.CommandAction;

public class ListAction implements CommandAction {

	@Override
	public String requestPro(HttpServletRequest request, HttpServletResponse response) throws Throwable {
		request.setCharacterEncoding("UTF-8");

		ArrayList<Community> list = CommunityDAO.getInstance().getBoards();
		
		request.setAttribute("array", list);
		// request.setAttribute("url", "BoardList.jsp");
		
		return "BoardList.jsp";
	}

}
