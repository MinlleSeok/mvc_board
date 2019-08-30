package com.comments.db;

import java.sql.Timestamp;

/*
 * comments table DTO / VO / Bean 

create table comments (
	num int primary key auto_increment,
	boNum int,
	userNum int,
	content text,
	regdate timestamp,
	reNum int,
	reDep int,
	reOdr int,
	moNum int
);

 */

public class Comments {
	
	private int num;
	private int boNum;
	private int userNum;
	private String content;
	private Timestamp regdate;		
	private int reNum;
	private int reDep;
	private int reOdr;
	private int moNum;
	
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
	public Timestamp getRegdate() {
		return regdate;
	}
	public void setRegdate(Timestamp regdate) {
		this.regdate = regdate;
	}
	public int getReNum() {
		return reNum;
	}
	public void setReNum(int reNum) {
		this.reNum = reNum;
	}
	public int getReDep() {
		return reDep;
	}
	public void setReDep(int reDep) {
		this.reDep = reDep;
	}
	public int getReOdr() {
		return reOdr;
	}
	public void setReOdr(int reOdr) {
		this.reOdr = reOdr;
	}
	public int getMoNum() {
		return moNum;
	}
	public void setMoNum(int moNum) {
		this.moNum = moNum;
	}
	
}
