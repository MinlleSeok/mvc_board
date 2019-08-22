package com.comments.db;

import java.sql.Date;

public class Comments {
	
	private int num;
	private int boNum;
	private int userNum;
	private String content;
	private Date regdate;
	
	public int getNum() {
		return num;
	}
	public void setNum(int num) {
		this.num = num;
	}
	public int getBoNum() {
		return boNum;
	}
	public void setBoNum(int boNum) {
		this.boNum = boNum;
	}
	public int getUserNum() {
		return userNum;
	}
	public void setUserNum(int userNum) {
		this.userNum = userNum;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public Date getRegdate() {
		return regdate;
	}
	public void setRegdate(Date regdate) {
		this.regdate = regdate;
	}
	
}
