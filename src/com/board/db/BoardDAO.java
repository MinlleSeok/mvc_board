package com.board.db;

import java.sql.SQLException;
import java.util.ArrayList;

import com.common.db.IbatisDAO;

public class BoardDAO extends IbatisDAO {

	public static BoardDAO getInstance() {
		
		BoardDAO _instance = new BoardDAO();
		
		_instance.SetDB();
		
		return _instance;
		
	}
	
	@SuppressWarnings("unchecked")
	public ArrayList<Board> getArticleList(int page) throws SQLException {
		
		ArrayList<Board> articleList = null;
		articleList = (ArrayList<Board>)GetDB().queryForList("getArticleList", null, page, 10);
		
		return articleList;
	}
	
	public Board getArticle(int idx) throws SQLException {
		
		Board article = null;
		article = (Board)GetDB().queryForObject("getArticle", idx);
		
		return article;
	}

	public void insertArticle(Board article) throws SQLException {
		
		GetDB().insert("insertArticle", article);
		
	}
	
	public void setArticleCount(Board article) throws SQLException {
		
		GetDB().update("setArticleCount", article);
		
	}

	public void deleteArticle(int idx) throws SQLException {
		
		GetDB().delete("deleteArticle", idx);
		
	}

	public void insertFile(Files file) throws SQLException {
		GetDB().insert("insertFile", file);
		
	}
	
	
	
}
