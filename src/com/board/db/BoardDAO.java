package com.board.db;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import com.comments.db.Comments;
import com.common.db.IbatisDAO;

/*
 * board table DAO
 */

public class BoardDAO extends IbatisDAO {

	// 싱글톤 패턴
	public static BoardDAO getInstance() {
		
		BoardDAO _instance = new BoardDAO();
		
		_instance.SetDB();
		
		return _instance;
		
	}
	
	/*
	 * 기능 메서드
	 */
	
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
		
		GetDB().delete("deleteArticle", (Integer)idx);
		
	}

	public int insertFile(Files myfile) throws SQLException {
		
		GetDB().insert("insertFile", myfile);
		int fileNum = (int)GetDB().queryForObject("sequence", null);
		
		return fileNum;
	}

	public void getFilesInsert(int moNum) throws SQLException {
		GetDB().queryForList("getFiles", (Integer)moNum);
	}

	public void updateFiles(int i) throws SQLException {
		GetDB().update("updateFile", i);
		
	}

	@SuppressWarnings("unchecked")
	public ArrayList<Files> getFiles(HashMap<String, Object> map) throws SQLException {
		ArrayList<Files> list = null;
		list = (ArrayList<Files>) GetDB().queryForList("getFiles", map);
		return list;
	}

	public Files downFile(int idx) throws SQLException {
		
		Files myfile = null;
		myfile = (Files) GetDB().queryForObject("downFile", idx);
		return myfile;
		
	}

	public void deleteFile(int num) throws SQLException {
		GetDB().delete("deleteFile", num);
	}

	public void updateArticle(Board article) throws SQLException {
		GetDB().update("updateArticle", article);
	}

}
