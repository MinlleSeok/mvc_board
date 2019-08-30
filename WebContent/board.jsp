<%@page import="com.board.db.Board"%>
<%@page import="java.util.ArrayList"%>
<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.Statement"%>
<%@page import="java.sql.DriverManager"%>
<%@page import="java.sql.Connection"%>
<%@page import="java.util.regex.Pattern"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>본격 게시판 - 게시글 리스트</title>
<link rel="shortcut icon" href="data:image/x-icon;," type="image/x-icon">
<link rel="stylesheet" type="text/css" href="css/board.css">
</head>
<body>
	<h1>게시글 리스트</h1>
	<table>
		<tr>
			<th>제목</th>
			<th>작성자</th>
			<th>날짜</th>
			<th>조회수</th>
		</tr>
		<c:forEach items="${array}" var="arr">
		<tr>
		<c:if test="${arr.pin > 0}">
			<td style="background: #00FFFF"><a href='count.do?moNum=${moNum}&idx=${arr.idx}'>${arr.title}</a></td>
			<td style="background: #FF00FF">${arr.writer}</td>
			<td style="background: #FFFF00">${arr.regdate}</td>
			<td style="background: #FF0000">${arr.count}</td>
		</c:if>
		<c:if test="${arr.pin == 0}">
			<td><a href='count.do?moNum=${moNum}&idx=${arr.idx}'>${arr.title}</a></td>
			<td>${arr.writer}</td>
			<td>${arr.regdate}</td>
			<td>${arr.count}</td>
		</c:if>
		</tr>
		</c:forEach>
	</table>
	<c:if test="${page > 0}">
		<a href="list.do?moNum=${moNum}&page=${page-10}">이전페이지</a>
	</c:if>
	<c:if test="${page == 0}">
		첫 페이지
	</c:if>
	<fmt:parseNumber value="${page/10+1}" type="number" integerOnly="True" /> 페이지
	<c:if test="${fn:length(array) < 10}">
		마지막 페이지 <br/>
	</c:if>
	<c:if test="${fn:length(array) == 10}">
		<a href="list.do?moNum=${moNum}&page=${page+10}">다음페이지</a> <br/>
	</c:if>
	<a href="write.do?moNum=${moNum}">글쓰기</a>
	<a href="BoardRequest.jsp">게시판제작</a>
	<a href="list.bo">게시판목록</a>
</body>
</html>