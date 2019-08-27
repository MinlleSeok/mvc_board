package com.comments.action;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

import com.comments.db.Comments;
import com.comments.db.CommentsDAO;
import com.controller.action.CommandAction;


public class ModifyAction implements CommandAction{

	@Override
	public String requestPro(HttpServletRequest request, HttpServletResponse response) throws Throwable {
		
		request.setCharacterEncoding("UTF-8");
		
		String content = request.getParameter("content");
		int boNum = Integer.parseInt(request.getParameter("boNum"));
		int moNum = Integer.parseInt(request.getParameter("moNum"));
		int num = Integer.parseInt(request.getParameter("num"));
		String userNum2 = "1";
		int userNum = Integer.parseInt(userNum2);

		Comments comments = new Comments();
		comments.setBoNum(boNum);
		comments.setContent(content);
		comments.setUserNum(userNum);
		comments.setMoNum(moNum);
		comments.setNum(num);
		CommentsDAO.getInstance().modifyComment(comments);
		System.out.println(content);
		
		
		return null;
	}
	
	
}
