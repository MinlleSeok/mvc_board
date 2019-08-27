package com.comments.action;

import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.board.db.BoardDAO;
import com.comments.db.Comments;
import com.comments.db.CommentsDAO;
import com.controller.action.CommandAction;

public class BringAction implements CommandAction {

	@Override
	public String requestPro(HttpServletRequest request, HttpServletResponse response) throws Throwable {
		
		request.setCharacterEncoding("UTF-8");
		response.setCharacterEncoding("UTF-8");
		
		int boNum = Integer.parseInt(request.getParameter("boNum"));
		int moNum = Integer.parseInt(request.getParameter("moNum"));
		int num = Integer.parseInt(request.getParameter("num"));
		
		Map<String, Integer> map = new HashMap<String, Integer>();
		map.put("boNum", boNum);
		map.put("moNum", moNum);
		map.put("num", num);
		
		Comments comments = CommentsDAO.getInstance().bringComment(map);
		
		PrintWriter out = response.getWriter();
		out.print(comments.getContent());
		
		return null;
	}

}
