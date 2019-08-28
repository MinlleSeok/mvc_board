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
<script>
	function onDownload(idx) {
		var o = document.getElementById("ifrm_filedown");
		o.src = "download.do?moNum=${article.moNum}&idx="+idx;
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
		<!--
		<tr id="commentsList">
			<td colspan="10">코멘트</td>
		</tr>
		 -->
		
		 
	</table>
	<a href="delete.do?moNum=${article.moNum}&idx=${article.idx}">게시글삭제</a>
	<a href="modify.do?moNum=${article.moNum}&idx=${article.idx}">게시글수정</a>
	<a href="list.do?moNum=${article.moNum}">목록으로</a>
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
						"boNum":boNum,
						"moNum":"${article.moNum}"},
				success : function(data) {
					printComment(boNum);
				}
				
			});
		}
		
		$(document).ready(function(){});
		
		function printComment(boNum) {
			$.ajax({
				url: "print.co?boNum="+boNum+"&moNum=${article.moNum}",
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
									  +	"<td colspan='2'>"+obj.comments[i].userNum+"</td>"
									  + "<td colspan='6' style='padding-left: "+(obj.comments[i].reDep)*10+"px;' id='comContent"+obj.comments[i].num+"'></td>"
									  + "<td colspan='2' id='comDetail"+obj.comments[i].num+"'></td></tr>");
									  if(obj.comments[i].userNum == obj.comments[i].reUserNum) {$("#comContent"+obj.comments[i].num).html(obj.comments[i].content);}
									  else {$("#comContent"+obj.comments[i].num).html("@"+obj.comments[i].reUserNum+" "+obj.comments[i].content);}
									  if (obj.comments[i].reDep == 0) {
									  $("#comDetail"+obj.comments[i].num).html("<a href='#' onclick='reComment(this, ${article.idx}, "+obj.comments[i].num+", "+obj.comments[i].reDep+")'>답글</a> <a href='#' onclick='modifyComment(this, ${article.moNum}, ${article.idx}, "+obj.comments[i].num+")'>수정</a> <a href='#' onclick='deleteComment(${article.moNum}, ${article.idx}, "+obj.comments[i].num+")'>삭제</a>");}
									  else {$("#comDetail"+obj.comments[i].num).html("<a href='#' onclick='reComment(this, ${article.idx}, "+obj.comments[i].num+", "+obj.comments[i].reDep+")'>답글</a> <a href='#' onclick='modifyComment(this, ${article.moNum}, ${article.idx}, "+obj.comments[i].num+")'>수정</a> <a href='#' onclick='deleteComment(${article.moNum}, ${article.idx}, "+obj.comments[i].num+")'>삭제</a>");}
						console.log(obj.comments[i].content);
					}
				}
				
			});
		}
		
		function reComment(meee,boNum,reNum,reDep) {
			if ($("tr[id^='reComment']").length > 0) {
				$("tr[id^='reComment']").find('td > div').stop().slideUp("slow", function(){

		         	$("tr[id^='reComment']").remove();

		        	 });
			
			}
			var comhtml = "";
			if(reDep > 0){
				comhtml = "<tr id='reComment"+reNum+"'><td colspan='7'><iframe id='reComment' src='about:blank'></iframe></td><td colspan='3'><button onclick='reReCommentInsert("+boNum+","+reNum+",${article.moNum});'>댓글</button></td></tr>";
			} else {
				comhtml = "<tr id='reComment"+reNum+"'><td colspan='7'><iframe id='reComment' src='about:blank'></iframe></td><td colspan='3'><button onclick='reCommentInsert("+boNum+","+reNum+",${article.moNum});'>댓글</button></td></tr>";
			}
			
			
			
			if($("#modifyComment"+reNum).length > 0){	
				$("#modifyComment"+reNum).find('td > div').stop().slideUp("slow", function(){
	        		$("#modifyComment"+reNum).remove();
	        	});
			}
			
			
			
			if($("#reComment"+reNum).length > 0){
				
				var offset = $(meee).offset();
		        $("html").animate({scrollTop : offset.top}, 200);

		        $("#reComment"+reNum).find('td > div').stop().slideUp("slow", function(){

		        	$("#reComment"+reNum).remove();

		        	 });
		        
			} else {
				
				var offset = $(meee).offset();
		        $("html").animate({scrollTop : offset.top}, 200);
		        
		        $(meee).parent().parent().after(comhtml);
		        $("#reComment"+reNum).children('td').wrapInner('<div style="display: none;" />');
		        $("#reComment"+reNum).show().find('td > div').stop().slideDown("slow");
		        
		        var cc = {};

					cc.w = document.getElementById("reComment"+reNum).getElementsByTagName("iframe")[0].contentWindow;
					cc.d = cc.w.document;
					cc.d.write("<!DOCTYPE html><html><head></head><body></body></html>");
					cc.d.designMode = "on";
					cc.w.focus();
			}
			/*
			$.ajax({
				url: "insert.co",
				type: "post",
				datatype : "json",
				data : {"content":content,
						"boNum":boNum},
				success : function(data) {
					printComment(boNum);
				}
				
			});*/
		}
		
		function modifyComment(meee,moNum,boNum,num) {
			
			var comhtml = "<tr id='modifyComment"+num+"'><td colspan='7'><iframe id='modifyComment' src='about:blank'></iframe></td><td colspan='3'><button onclick='commentModify("+moNum+","+boNum+","+num+");'>댓글</button></td></tr>";
			
			if($("#reComment"+num).length > 0){	
				$("#reComment"+num).find('td > div').stop().slideUp("slow", function(){
	        		$("#reComment"+num).remove();
	        	});
			}
			
			if($("#modifyComment"+num).length > 0){
				
				var offset = $(meee).offset();
		        $("html").animate({scrollTop : offset.top}, 200);

		        $("#reComment"+num).find('td > div').stop().slideUp("slow", function(){

		        	$("#reComment"+num).remove();

		        	 });
		        
			} else {
				
				var offset = $(meee).offset();
		        $("html").animate({scrollTop : offset.top}, 200);
		        
		        $(meee).parent().parent().after(comhtml);
		        $("#modifyComment"+num).children('td').wrapInner('<div style="display: none;" />');
		        $("#modifyComment"+num).show().find('td > div').stop().slideDown("slow");
		        
		        var dd = {};

					dd.w = document.getElementById("modifyComment"+num).getElementsByTagName("iframe")[0].contentWindow;
					dd.d = dd.w.document;
					dd.d.write("<!DOCTYPE html><html><head></head><body></body></html>");
					dd.d.designMode = "on";
					dd.w.focus();
					$.ajax({
						url: "bring.co",
						type: "post",
						datatype : "json",
						data : {"moNum":moNum,
								"boNum":boNum,
								"num":num},
						success : function(data) {
							dd.d.getElementsByTagName("BODY")[0].innerHTML = data;
						}
						
					});
					
			}
			/*
			*/
		}
		
		function reCommentInsert(boNum,reNum,moNum) {
			var content = document.getElementById("reComment"+reNum).getElementsByTagName("iframe")[0].contentWindow.document.getElementsByTagName("BODY")[0].innerHTML;
			$.ajax({
				url: "reInsert.co",
				type: "post",
				datatype : "json",
				data : {"content":content,
						"boNum":boNum,
						"reNum":reNum,
						"moNum":moNum},
				success : function(data) {
					printComment(boNum);
					$("#reComment"+reNum).find('td > div').stop().slideUp("slow", function(){

			        	$("#reComment"+reNum).remove();

			        	 });
				}
				
			});
		}
		
		function reReCommentInsert(boNum,reNum,moNum) {
			var content = document.getElementById("reComment"+reNum).getElementsByTagName("iframe")[0].contentWindow.document.getElementsByTagName("BODY")[0].innerHTML;
			$.ajax({
				url: "reReInsert.co",
				type: "post",
				datatype : "json",
				data : {"content":content,
						"boNum":boNum,
						"reNum":reNum,
						"moNum":moNum},
				success : function(data) {
					printComment(boNum);
					$("#reComment"+reNum).find('td > div').stop().slideUp("slow", function(){

			        	$("#reComment"+reNum).remove();

			        	 });
				}
				
			});
		}

		function commentModify(moNum,boNum,num) {
			var content = document.getElementById("modifyComment"+num).getElementsByTagName("iframe")[0].contentWindow.document.getElementsByTagName("BODY")[0].innerHTML;
			$.ajax({
				url: "modify.co",
				type: "post",
				datatype : "json",
				data : {"content":content,
						"boNum":boNum,
						"num":num,
						"moNum":moNum},
				success : function(data) {
					printComment(boNum);
					$("#modifyComment"+num).find('td > div').stop().slideUp("slow", function(){

			        	$("#modifyComment"+num).remove();

			        	 });
				}
				
			});
		}
		
		
		function deleteComment(moNum,boNum,num) {
			$.ajax({
				url: "delete.co",
				type: "post",
				datatype : "json",
				data : {"moNum":moNum,
						"boNum":boNum,
						"num":num},
				success : function(data) {
					printComment(boNum);
					if($("#reComment"+num).length > 0){	
						$("#reComment"+num).find('td > div').stop().slideUp("slow", function(){
			        		$("#reComment"+num).remove();
			        	});
					}
					if($("#modifyComment"+num).length > 0){	
						$("#modifyComment"+num).find('td > div').stop().slideUp("slow", function(){
			        		$("#modifyComment"+num).remove();
			        	});
					}
				}
				
			});
		}
	</script>
</body>
</html>