package com.comments.action;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

import com.comments.db.Comments;
import com.comments.db.CommentsDAO;
import com.controller.action.CommandAction;


public class InsertAction implements CommandAction{

	@Override
	public String requestPro(HttpServletRequest request, HttpServletResponse response) throws Throwable {
		
		request.setCharacterEncoding("UTF-8");
		
		String content = request.getParameter("content");
		String boNum2 = request.getParameter("boNum");
		String userNum2 = "1";
		int boNum = Integer.parseInt(boNum2);
		int userNum = Integer.parseInt(userNum2);
		int moNum = Integer.parseInt(request.getParameter("moNum"));
		Comments comments = new Comments();
		comments.setBoNum(boNum);
		comments.setContent(content);
		comments.setUserNum(userNum);
		comments.setMoNum(moNum);
		CommentsDAO.getInstance().insertComment(comments);
		System.out.println(content);
		
		
		return null;
	}
	
	
}
