<%@page import="java.sql.DriverManager"%>
<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.Statement"%>
<%@page import="java.sql.Connection"%>
<%@page import="java.util.regex.Pattern"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>본격 게시판 - 게시글 리스트</title>

<style type="text/css">
#content2 {
	box-sizing: border-box;
	border: 1px solid #999;
	padding: 2px;
	width: 100%;
	height: 150px;
}
</style>
<body>
	<h1>게시글 수정</h1>
	<form action="modify.do">
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
				<td colspan="7"><input type="text" value="${article.title}"
					name="title"></td>
			</tr>
			<tr>
				<th colspan="3">if(관리자면) 공지사항</th>
				<c:if test="${article.pin > 0}">
				<td colspan="7"><input type="checkbox" name="pin" checked></td>
				</c:if>
				<c:if test="${article.pin == 0}">
				<td colspan="7"><input type="checkbox" name="pin"></td>
				</c:if>
			</tr>
			
			<tr>
				<th colspan="3">파일</th>
				<td colspan="7"><input type="file" name="filename" multiple
					accept="image/*" id="fileElem" style="display: none"
					onchange="handleFiles(this.files)"><br /> <a href="#"
					id="fileSelect">Select some files</a><br />
					<div id="fileList">
						<p id="filemsg"></p>
					</div> <br /></td>
			</tr>
			<tr>
				<th colspan="3">내용</th>
				<td colspan="7"><iframe id="content2" src="about:blank"></iframe>
					<textarea rows="5" cols="20" name="content" style="display: none;"></textarea>
				</td>
			</tr>
			<c:forEach items="${filesList}" var="fl">
				<tr>
					<th colspan="3">첨부파일</th>
					<td colspan="7">${fl.filename} <a href="#">삭제</a>
					</td>
				</tr>
			</c:forEach>
			<tr>
				<td colspan="10"><input type="submit" value="작성" /></td>
			</tr>
		</table>
	</form>
	<a href="list.do?moNum=${article.moNum}">목록으로</a>
	
	<script	src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
	<script>
	var xE = {};
	
	window.onload = function() {
		
		xE.w = document.getElementById("content2").contentWindow;
		xE.d = xE.w.document;
		xE.d.write("<!DOCTYPE html><html><head></head><body></body></html>");
		xE.d.designMode = "on";
		xE.d.getElementsByTagName("body")[0].innerHTML = '${article.content}';
		
		window.URL = window.URL || window.webkitURL;

		const fileSelect = document.getElementById("fileSelect"),
		    fileElem = document.getElementById("fileElem"),
		    fileList = document.getElementById("fileList");

		fileSelect.addEventListener("click", function (e) {
		  if (fileElem) {
		    fileElem.click();
		  }
		  e.preventDefault(); // prevent navigation to "#"
		}, false);
		
	}
	
	

	function handleFiles(files) {
		
	
	  if (!files.length) {
	  	
		document.getElementById("filemsg").innerHTML = "";
		document.getElementById("filemsg").innerHTML = "사진읍따";
		  
	  } else {
		  document.getElementById("filemsg").innerHTML = "";
		  const list = document.createElement("ul");
	    fileList.appendChild(list);
	    for (let i = 0; i < files.length; i++) {
	      const li = document.createElement("li");
	      list.appendChild(li);
	      
	      const img = document.createElement("img");
	      img.src = window.URL.createObjectURL(files[i]);
	      img.height = 60;
	      img.onload = function() {
	        window.URL.revokeObjectURL(this.src);
	      }
	      li.appendChild(img);
	      const info = document.createElement("span");
	      info.innerHTML = files[i].name + ": " + files[i].size + " bytes";
	      li.appendChild(info);
	      
	      
	      var formData = new FormData();
	      var moNumm = ${param.moNum};
	      
	      formData.append("fileObj",files[i]);
	      formData.append("moNum",moNumm);
	      
	      var xhttp = new XMLHttpRequest();
	      xhttp.onreadystatechange = function() {
	          if (this.readyState == 4 && this.status == 200) {
	        	var jobj = JSON.parse(xhttp.responseText);
	            var output = xE.d.getElementsByTagName("body")[0];
	            var img2 = document.createElement("img");
         		img2.src = "upload/"+jobj.filename;
    			img2.height = 100;
   	      		img2.onload = function() {
   	       			window.URL.revokeObjectURL(this.src);
   	      		}
        	 	output.appendChild(img2);
			      var input = document.createElement("input");
			      input.type = "hidden";
			      input.name = "files";
			      input.value= jobj.fileNum;
			      fileList.appendChild(input);
	          }
	      };
	      xhttp.open("POST", "file.do", false);
	      xhttp.send(formData);
	      
	    }
	  }
	}


	</script>
</body>
</html>