package com.db.sqlconfig;

import java.io.Reader;

import com.ibatis.common.resources.Resources;
import com.ibatis.sqlmap.client.SqlMapClient;
import com.ibatis.sqlmap.client.SqlMapClientBuilder;

/*
 *	iBatis 기본 설정 페이지 
 */

public final class IBatisDBConnector {
	
	private static SqlMapClient mySQLMap;
	
	static {
		try {
			
			String resource = "com/db/sqlconfig/SqlMapConfig.xml";
			
			Reader reader = Resources.getResourceAsReader(resource);
			
			mySQLMap = SqlMapClientBuilder.buildSqlMapClient(reader);
			
		} catch (Exception e) {
			
			e.printStackTrace();
			
		}
	}
	
	public static SqlMapClient getSqlMapInstance() {
		
		return mySQLMap;
		
	}
}
