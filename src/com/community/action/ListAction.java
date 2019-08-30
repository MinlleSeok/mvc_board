package com.community.action;

import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.community.db.Community;
import com.community.db.CommunityDAO;
import com.controller.action.CommandAction;

/*
 * community list action
 */

public class ListAction implements CommandAction {

	@Override
	public String requestPro(HttpServletRequest request, HttpServletResponse response) throws Throwable {
		
		request.setCharacterEncoding("UTF-8");

		ArrayList<Community> list = CommunityDAO.getInstance().getBoards();
		request.setAttribute("array", list);
		
		return "boardList.jsp";
	}

}
