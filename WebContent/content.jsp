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
<style type="text/css">
	#comment {
		box-sizing: border-box;
		border: 1px solid #999;
		padding: 2px;
		width: 100%;
		height: 150px;
	}
</style>
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
		<tr>
			<th colspan="3">첨부파일</th>
			<td colspan="7">
				<a href="#" onclick="onDownload('${article.idx}')">${article.filename}</a>
			</td>
		</tr>
		<tr id="comments">
			<td colspan="7"><iframe id="comment" src="about:blank"></iframe></td>
			<td colspan="3"><button onclick="insertComment('${article.idx}');">댓글</button></td>
		</tr>
		<!--
		<tr id="commentsList">
			<td colspan="10">코멘트</td>
		</tr>
		  -->
	</table>
	<a href="delete.do?idx="${article.idx}">게시글삭제</a>
	<a href="list.do">목록으로</a>
	<iframe id="ifrm_filedown" style="position:absolute; z-index:1; visibility: hidden;"></iframe>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
	<script>
		var xE = {};
		
		window.onload = function() {
			xE.w = document.getElementById("comment").contentWindow;
			xE.d = xE.w.document;
			xE.d.write("<!DOCTYPE html><html><head></head><body></body></html>");
			xE.d.designMode = "on";
			xE.w.focus();
			printComment('${article.idx}');
			
		}
		
		function insertComment(boNum) {
			var content = xE.d.getElementsByTagName("BODY")[0].innerHTML;
			$.ajax({
				url: "insert.co",
				type: "post",
				datatype : "json",
				data : {"content":content,
						"boNum":boNum},
				success : function(data) {
					printComment(boNum);
				}
				
			});
		}
		
		$(document).ready(function(){});
		
		function printComment(boNum) {
			$.ajax({
				url: "print.co?boNum="+boNum,
				cache : false,
				success : function(data) {
					console.log(data);
					var obj = JSON.parse(data);
					var comList = $("table");
					$(".comment").remove();
					console.log(comList);
					var i;
					for(i in obj.comments) {
						comList.append("<tr class='comment'>"
									  +	"<td colspan='3'>"+obj.comments[i].userNum+"</td>"
									  + "<td colspan='7'>"+obj.comments[i].content+"</td></tr>");
						console.log(obj.comments[i].content);
					}
				}
				
			});
		}
	</script>
</body>
</html>