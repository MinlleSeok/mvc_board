package com.comments.action;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.comments.db.Comments;
import com.comments.db.CommentsDAO;
import com.controller.action.CommandAction;

/*
 * comments ReReInsert Action - ajax
 */

public class ReReInsertAction implements CommandAction{

	@Override
	public String requestPro(HttpServletRequest request, HttpServletResponse response) throws Throwable {
		
		request.setCharacterEncoding("UTF-8");
		
		String content = request.getParameter("content");
		String boNum2 = request.getParameter("boNum");
		String reNum2 = request.getParameter("reNum");
		String userNum2 = "2";
		int boNum = Integer.parseInt(boNum2);
		int reNum = Integer.parseInt(reNum2);
		int userNum = Integer.parseInt(userNum2);
		int moNum = Integer.parseInt(request.getParameter("moNum"));
		Comments comments = new Comments();
		comments.setBoNum(boNum);
		comments.setReNum(reNum);
		comments.setContent(content);
		comments.setUserNum(userNum);
		comments.setMoNum(moNum);
		CommentsDAO.getInstance().reReInsertComment(comments);
		System.out.println(content);
		
		
		return null;
	}
	
	
}
