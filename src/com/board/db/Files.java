package com.board.db;

/*
 *	files table DTO / VO / Bean

create table files (
	num int primary key auto_increment,
	userNum int,
	boNum int,
	filename varchar(100),
	moNum int
);

 */

public class Files {

	private int num;
	private int userNum;
	private int boNum;
	private String filename;
	private int moNum;
	
	public int getNum() {
		return num;
	}
	public void setNum(int num) {
		this.num = num;
	}
	public int getUserNum() {
		return userNum;
	}
	public void setUserNum(int userNum) {
		this.userNum = userNum;
	}
	public int getBoNum() {
		return boNum;
	}
	public void setBoNum(int boNum) {
		this.boNum = boNum;
	}
	public String getFilename() {
		return filename;
	}
	public void setFilename(String filename) {
		this.filename = filename;
	}
	public int getMoNum() {
		return moNum;
	}
	public void setMoNum(int moNum) {
		this.moNum = moNum;
	}
	
	
	
}
