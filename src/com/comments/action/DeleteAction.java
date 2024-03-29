package com.comments.action;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.comments.db.CommentsDAO;
import com.controller.action.CommandAction;

/*
 * comments Delete Action - ajax
 */

public class DeleteAction implements CommandAction{

	@Override
	public String requestPro(HttpServletRequest request, HttpServletResponse response) throws Throwable {
		
		request.setCharacterEncoding("UTF-8");
		
		int boNum = Integer.parseInt(request.getParameter("boNum"));
		int moNum = Integer.parseInt(request.getParameter("moNum"));
		int num = Integer.parseInt(request.getParameter("num"));
		
		Map<String, Integer> map = new HashMap<String, Integer>();
		map.put("boNum", boNum);
		map.put("moNum", moNum);
		map.put("num", num);
		
		CommentsDAO.getInstance().deleteComment(map);
		
		
		return null;
	}
	
	
}
