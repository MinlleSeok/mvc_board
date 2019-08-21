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
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>

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
			<td><a href='count.do?idx=${arr.idx}'>${arr.title}</a></td>
			<td>${arr.writer}</td>
			<td>${arr.regdate}</td>
			<td>${arr.count}</td>
		</tr>
		</c:forEach>
	</table>
	<c:if test="${page > 0}">
		<a href="list.do?page=${page-10}">이전페이지</a>
	</c:if>
	<c:if test="${page == 0}">
		첫 페이지
	</c:if>
	<fmt:parseNumber value="${page/10+1}" type="number" integerOnly="True" /> 페이지
	<c:if test="${fn:length(array) < 10}">
		마지막 페이지 <br/>
	</c:if>
	<c:if test="${fn:length(array) == 10}">
		<a href="list.do?page=${page+10}">다음페이지</a> <br/>
	</c:if>
	<a href="write.jsp">글쓰기</a>
</body>
</html>