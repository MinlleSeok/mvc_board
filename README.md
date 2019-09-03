# MVC_board

JSP 모델 2 게시판 제작 예제입니다.
Eclipse / Java / Mysql / Javascript

참고자료 : https://cusmaker.tistory.com/m/88

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

create table files (
	num int primary key auto_increment,
	userNum int,
	boNum int,
	filename varchar(100),
	moNum int
);

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

create table community (
	num int primary key auto_increment,
	name varchar(30) not null,
	category varchar(30) not null
);