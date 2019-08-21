<%@page import="java.sql.DriverManager"%>
<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.Statement"%>
<%@page import="java.sql.Connection"%>
<%@page import="java.util.regex.Pattern"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>본격 게시판 - 게시글 리스트</title>
<script>
	function onDownload(idx) {
		var o = document.getElementById("ifrm_filedown");
		o.src = "download.do?idx="+idx;
	}
</script>
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
			<th colspan="2">제목</th>
			<td colspan="6">${article.title}</td>
		</tr>
		<tr>
			<th colspan="2">내용</th>
			<td colspan="6">${article.content}</td>
		</tr>
		<tr>
			<th colspan="2">첨부파일</th>
			<td colspan="6">
				<a href="#" onclick="onDownload('${article.idx}')">${article.filename}</a>
			</td>
		</tr>
	</table>
	<a href="delete.do?idx=${article.idx}">게시글삭제</a>
	<a href="list.do">목록으로</a>
	<iframe id="ifrm_filedown" style="position:absolute; z-index:1; visibility: hidden;"></iframe>
</body>
</html>