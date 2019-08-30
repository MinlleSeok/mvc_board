package com.board.db;

import java.sql.Timestamp;

/*
 * comments table DTO / VO / Bean

create table board (
	idx int primary key auto_increment,
	title varchar(30) not null,
	writer varchar(30) not null,
	regdate timestamp not null,
	count int,
	content text not null,
	regip varchar(50) not null,
	filename varchar(100),
	thumbImg varchar(100),
	moNum int not null,
	pin int default 0
);

 */

public class Board {

	private int idx;
	private String title;
	private String writer;
	private Timestamp regdate;
	private int count;
	private String content;
	private String regip;
	private String filename;
	private String thumbImg;
	private int moNum;
	private int pin;
	
	public int getIdx() {
		return idx;
	}
	public void setIdx(int idx) {
		this.idx = idx;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getWriter() {
		return writer;
	}
	public void setWriter(String writer) {
		this.writer = writer;
	}
	public Timestamp getRegdate() {
		return regdate;
	}
	public void setRegdate(Timestamp regdate) {
		this.regdate = regdate;
	}
	public int getCount() {
		return count;
	}
	public void setCount(int count) {
		this.count = count;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public String getRegip() {
		return regip;
	}
	public void setRegip(String regip) {
		this.regip = regip;
	}
	public String getFilename() {
		return filename;
	}
	public String getThumbImg() {
		return thumbImg;
	}
	public void setThumbImg(String thumbImg) {
		this.thumbImg = thumbImg;
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
	public int getPin() {
		return pin;
	}
	public void setPin(int pin) {
		this.pin = pin;
	}
}
