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
<%
	String idx = request.getParameter("idx");
	try {
		String driverName = "oracle.jdbc.driver.OracleDriver";
		String url = "jdbc:oracle:thin:@localhost:1521:XE";
		ResultSet rs = null;
		
		Class.forName(driverName);
		Connection con = DriverManager.getConnection(url,"board","12345");
		
		Statement stmt = con.createStatement();
		String sql = "select * from board where idx = "+idx;
		rs = stmt.executeQuery(sql);
		while(rs.next()){
			request.setAttribute("idx",rs.getString("idx"));
			request.setAttribute("writer",rs.getString("writer"));
			request.setAttribute("regdate",rs.getString("regdate"));
			request.setAttribute("count",rs.getString("count"));
			request.setAttribute("title",rs.getString("title"));
			request.setAttribute("content",rs.getString("content"));
		}
		con.close();
		
	} catch (Exception e) {
		
	}
%>
<body>
	<h1>게시글 조회</h1>
	<table border="1">
		<tr>
			<th>번호</th>
			<td>${idx}</td>
			<th>작성자</th>
			<td>${writer}</td>
			<th>날짜</th>
			<td>${regdate}</td>
			<th>조회수</th>
			<td>${count}</td>
		</tr>
		<tr>
			<th colspan="2">제목</th>
			<td colspan="6">${title}</td>
		</tr>
		<tr>
			<th colspan="2">내용</th>
			<td colspan="6">${content}</td>
		</tr>
	</table>
	<a href="delete.jsp?idx=${idx}">게시글삭제</a>
	<a href="board.jsp">목록으로</a>
</body>
</html>