package com.comments.db;

import java.sql.SQLException;
import java.util.ArrayList;

import com.common.db.IbatisDAO;

public class CommentsDAO extends IbatisDAO {

	public static CommentsDAO getInstance() {
		
		CommentsDAO _instance = new CommentsDAO();
		
		_instance.SetDB();
		
		return _instance;
		
	}
	
	@SuppressWarnings("unchecked")
	public ArrayList<Comments> getCommentsList(int boNum, int page) throws SQLException {
		
		ArrayList<Comments> commentsList = null;
		commentsList = (ArrayList<Comments>)GetDB().queryForList("getCommentsList", boNum, page, 10);
		
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
		int sum = (int) GetDB().queryForObject("selectReDepOdr",reNum);
		GetDB().update("updateReComment", sum);
		
	}

}
