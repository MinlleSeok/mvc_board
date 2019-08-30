<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>본격 MVC 게시판 - 글쓰기</title>
<link rel="shortcut icon" href="data:image/x-icon;," type="image/x-icon">
<link rel="stylesheet" type="text/css" href="css/write.css">
<script src="js/write.js"></script>
</head>
<body>
	<form action="insert.do" method="post" id="fr" onsubmit='return filesListing();'>
		<!-- 히든 변수 선언 -->
		<input type="hidden" name="moNumm" id="moNumm" value="${param.moNum}"> 
		
		<!-- 기본 작성 input 필드 -->
		제목 : <input type="text" name="title" /><br /> 
		작성자 : <input type="text" name="writer" /><br /> 
		if(관리자면) 공지사항:<input type="checkbox" name="pin"><br /> 
		
		<!-- 파일 업로더(js 연결요소) -->
		파일 : <input type="file" name="filename" multiple accept="image/*" id="fileElem" style="display: none" onchange="handleFiles(this.files)"><br /> 
		<a href="#" id="fileSelect">Select some files</a><br />
		
		<!-- 파일 목록 시작(js 연결요소) -->
		<div id="fileList">
			<p id="filemsg"></p>
		</div><br /> 
		<!-- 파일 목록 종료 -->
		
		<!-- 글 에디터 시작(js 연결요소) -->
		내용 : <iframe id="content2" src="about:blank"></iframe><br />
		<textarea rows="5" cols="20" name="content" style="display: none;"></textarea>
		<!-- 글 에디터 종료 -->
		
		<input type="submit" value="작성" />
	</form>
	<a href="javascript:void(0);" onclick="window.history.go(-1); return false;">돌아가기</a>
</body>
</html>