package com.community.db;

import java.sql.SQLException;
import java.util.ArrayList;

import com.common.db.IbatisDAO;

public class CommunityDAO extends IbatisDAO {

	public static CommunityDAO getInstance() {
		
		CommunityDAO _instance = new CommunityDAO();
		
		_instance.SetDB();
		
		return _instance;
		
	}

	public void insertCommunity(Community com) throws SQLException {

		GetDB().insert("insertCommunity", com);	
		
	}

	@SuppressWarnings("unchecked")
	public ArrayList<Community> getBoards() throws SQLException {
		ArrayList<Community> list = null;
		list = (ArrayList<Community>) GetDB().queryForList("getCommunity", null);
		return list;
	}
		
}
