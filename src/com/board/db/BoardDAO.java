package com.board.db;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;

import com.common.db.IbatisDAO;

public class BoardDAO extends IbatisDAO {

	public static BoardDAO getInstance() {
		
		BoardDAO _instance = new BoardDAO();
		
		_instance.SetDB();
		
		return _instance;
		
	}
	
	@SuppressWarnings("unchecked")
	public ArrayList<Board> getArticleList(int page, int moNum) throws SQLException {
		
		ArrayList<Board> articleList = null;
		articleList = (ArrayList<Board>)GetDB().queryForList("getArticleList", moNum, page, 10);
		
		return articleList;
	}
	
	public Board getArticle(HashMap<String, Object> map) throws SQLException {
		
		Board article = null;
		article = (Board)GetDB().queryForObject("getArticle", map);
		
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

	public int insertFile(Files file) throws SQLException {
		GetDB().insert("insertFile", file);
		int fileNum = (int)GetDB().queryForObject("getFile", file.getFilename());
		return fileNum;
	}

	public void getFilesInsert(int moNum) throws SQLException {
		GetDB().queryForList("getFiles", moNum);
	}
	
	
	
}
