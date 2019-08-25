package com.comments.action;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

import com.comments.db.Comments;
import com.comments.db.CommentsDAO;
import com.controller.action.CommandAction;


public class ReInsertAction implements CommandAction{

	@Override
	public String requestPro(HttpServletRequest request, HttpServletResponse response) throws Throwable {
		
		request.setCharacterEncoding("UTF-8");
		
		String content = request.getParameter("content");
		String boNum2 = request.getParameter("boNum");
		String reNum2 = request.getParameter("reNum");
		String userNum2 = "1";
		int boNum = Integer.parseInt(boNum2);
		int reNum = Integer.parseInt(reNum2);
		int userNum = Integer.parseInt(userNum2);
		Comments comments = new Comments();
		comments.setBoNum(boNum);
		comments.setReNum(reNum);
		comments.setContent(content);
		comments.setUserNum(userNum);
		CommentsDAO.getInstance().reInsertComment(comments);
		System.out.println(content);
		
		
		return null;
	}
	
	
}
