package com.comments.db;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

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

	public void modifyComment(Comments comments) throws SQLException {
		GetDB().update("modifyComment", comments);
	}
	
	public Comments bringComment(Map<String, Integer> map) throws SQLException {

		Comments comments = null;
		comments = (Comments) GetDB().queryForObject("bringComment", map);
		return comments;
	}


	public void deleteComment(Map<String, Integer> map) throws SQLException {
		GetDB().delete("deleteComment", map);
	}

	public int getCommentUser(int reNum) throws SQLException {
		int userNum = 0;
		userNum = (Integer) GetDB().queryForObject("getCommentUser", reNum);
		return userNum;
	}

	public int getCommentsCount(HashMap<String, Object> map) throws SQLException {
		int count = 0;
		count = (Integer) GetDB().queryForObject("getCommentsCount", map);
		return count;
	}

	public void reReInsertComment(Comments comments) throws SQLException {
		int reReNum = (Integer) GetDB().queryForObject("reReGetReNum", comments.getReNum());
		comments.setReNum(reReNum);
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
