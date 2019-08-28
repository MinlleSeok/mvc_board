package com.comments.action;

import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.HashMap;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

import com.comments.db.Comments;
import com.comments.db.CommentsDAO;
import com.controller.action.CommandAction;

public class ListAction implements CommandAction {

	@SuppressWarnings("unchecked")
	@Override
	public String requestPro(HttpServletRequest request, HttpServletResponse response) throws Throwable {
		
		request.setCharacterEncoding("UTF-8");
		response.setContentType("contentType=text/html; charset=UTF-8");
		response.setCharacterEncoding("UTF-8");
		
		String boNum2 = request.getParameter("boNum");
		int boNum = Integer.parseInt(boNum2);
		int moNum = Integer.parseInt(request.getParameter("moNum"));
		HashMap<String, Object> map = new HashMap<String, Object>();
		map.put("boNum", boNum);
		map.put("moNum", moNum);
		
		int page = 0;
		if(request.getParameter("page") != null) {
			page = Integer.parseInt(request.getParameter("page"));
		}
		int count = CommentsDAO.getInstance().getCommentsCount(map);
		ArrayList<Comments> commentsList = CommentsDAO.getInstance().getCommentsList(map, count-10);
		
		JSONObject obj = new JSONObject();
		
		JSONArray cArray = new JSONArray();
		
		for(int i=0; i<commentsList.size(); i++) {
			
			JSONObject cObject = new JSONObject();
			
			cObject.put("num", commentsList.get(i).getNum());
			cObject.put("moNum", commentsList.get(i).getMoNum());
			cObject.put("boNum", commentsList.get(i).getBoNum());
			cObject.put("userNum", commentsList.get(i).getUserNum());
			cObject.put("content", commentsList.get(i).getContent());
			cObject.put("regdate", commentsList.get(i).getRegdate().toString());
			cObject.put("reDep", commentsList.get(i).getReDep());
			int reUserNum = CommentsDAO.getInstance().getCommentUser(commentsList.get(i).getReNum());
			cObject.put("reUserNum", reUserNum);
			cArray.add(cObject);
		}
		obj.put("comments", cArray);
		obj.put("page", page);
		
		PrintWriter out = response.getWriter();
		out.println(obj.toString());
		out.flush();
		
		return null;
	}

}
