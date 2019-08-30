<%@page import="java.sql.DriverManager"%>
<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.Statement"%>
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
<link rel="shortcut icon" href="data:image/x-icon;," type="image/x-icon">
<link rel="stylesheet" type="text/css" href="css/content.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="js/content.js"></script>
<body>
	<h1>게시글 조회</h1>
	<table border="1">
		<tr>
			<th>번호</th>
			<td>${article.idx}</td>
			<th>작성자</th>
			<td>${article.writer}</td>
			<th>ip</th>
			<td>${article.regip}</td>
			<th>날짜</th>
			<td>${article.regdate}</td>
			<th>조회수</th>
			<td>${article.count}</td>
		</tr>
		<tr>
			<th colspan="3">제목</th>
			<td colspan="7">${article.title}</td>
		</tr>
		<tr>
			<th colspan="3">내용</th>
			<td colspan="7">${article.content}</td>
		</tr>
		<c:forEach items="${filesList}" var="fl">
		<tr>
			<th colspan="3">첨부파일</th>
			<td colspan="7">
				<a href="#" onclick="onDownload('${fl.num}')">${fl.filename}</a>
			</td>
		</tr>
		</c:forEach>
		<tr id="comments">
			<td colspan="7"><iframe id="comment" src="about:blank"></iframe></td>
			<td colspan="3"><button onclick="insertComment('${article.idx}');">댓글</button></td>
		</tr>
	</table>
	
	<a href="delete.do?moNum=${article.moNum}&idx=${article.idx}">게시글삭제</a>
	<a href="modify.do?moNum=${article.moNum}&idx=${article.idx}">게시글수정</a>
	<a href="list.do?moNum=${article.moNum}">목록으로</a>
	
	<iframe id="ifrm_filedown" style="position:absolute; z-index:1; visibility: hidden;"></iframe>
	
	
</body>
</html>