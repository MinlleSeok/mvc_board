package com.comments.db;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;

import com.common.db.IbatisDAO;

public class CommentsDAO extends IbatisDAO {

	public static CommentsDAO getInstance() {
		
		CommentsDAO _instance = new CommentsDAO();
		
		_instance.SetDB();
		
		return _instance;
		
	}
	
	@SuppressWarnings("unchecked")
	public ArrayList<Comments> getCommentsList(HashMap<String, Object> map, int page) throws SQLException {
		
		ArrayList<Comments> commentsList = null;
		commentsList = (ArrayList<Comments>)GetDB().queryForList("getCommentsList", map, page, 10);
		
		return commentsList;
	}

	public void insertComment(Comments comments) throws SQLException {
		// TODO Auto-generated method stub
		GetDB().insert("insertComment", comments);
		GetDB().update("updateComment", null);
	}

	public void reInsertComment(Comments comments) throws SQLException {
		GetDB().insert("insertReComment", comments);
		int reNum = comments.getReNum();
		int moNum = comments.getMoNum();
		int boNum = comments.getBoNum();
		HashMap<String, Object> map = new HashMap<String, Object>();
		map.put("boNum", boNum);
		map.put("moNum", moNum);
		map.put("reNum", reNum);
		int sum = (int) GetDB().queryForObject("selectReDepOdr",map);
		map.put("sum", sum);
		GetDB().update("updateReComment", map);
		
	}

}
