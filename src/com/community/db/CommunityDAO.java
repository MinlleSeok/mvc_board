package com.community.db;

import java.sql.SQLException;
import java.util.ArrayList;

import com.common.db.IbatisDAO;

/*
 * community table DAO
 */

public class CommunityDAO extends IbatisDAO {

	// 싱글톤 패턴
	public static CommunityDAO getInstance() {
		
		CommunityDAO _instance = new CommunityDAO();
		_instance.SetDB();
		
		return _instance;
	}

	/*
	 * 기능 메서드
	 */
	
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
