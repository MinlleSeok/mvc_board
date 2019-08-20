<%@page import="com.board.bean.Board"%>
<%@page import="java.util.ArrayList"%>
<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.Statement"%>
<%@page import="java.sql.DriverManager"%>
<%@page import="java.sql.Connection"%>
<%@page import="java.util.regex.Pattern"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>본격 게시판 - 게시글 리스트</title>
<style type="text/css">
	table, td, th {
		border: 1px solid green;
	}
	
	th {
		background-color: green;
		color: white;
	}
</style>
</head>


<body>

	<h1>게시글 리스트</h1>
	<table>
		<tr>
			<th>번호</th>
			<th>제목</th>
			<th>작성자</th>
			<th>날짜</th>
			<th>조회수</th>
		</tr>
		<c:forEach items="${array}" var="arr">
		<tr>
			<td>${arr.idx}</td>
			<td><a href='content.jsp?idx=${arr.idx}'>${arr.title}</a></td>
			<td>${arr.writer}</td>
			<td>${arr.regdate}</td>
			<td>${arr.count}</td>
		</tr>
		</c:forEach>
	</table>
	<a href="write.jsp">글쓰기</a>
</body>
</html>