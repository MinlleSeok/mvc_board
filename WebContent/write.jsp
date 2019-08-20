<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>본격 게시판 - 글쓰기</title>
</head>
<body>
	<form action="insert.jsp" method="post"> <!-- onsubmit="return formCheck();" -->
		제목 : <input type="text" name="title" /><br/>
		작성자 : <input type="text" name="writer" /><br/>
		날짜 : <input type="text" name="regdate" /><br/>
		내용 : <textarea rows="10" cols="20" name="content"></textarea><br/>
		<input type="submit" />
		
	</form>
	<script>
		//alert(document.forms[0].title.name);
		function formCheck() {
			// alert(document.forms[0].title.value);
			
			var title = document.forms[0].title.value;
			var writer = document.forms[0].writer.value;
			var regdate = document.forms[0].regdate.value;
			var content = document.forms[0].content.value;
			
			/* var length = document.forms[0].length-1;
			
			for(var i = 0; i < length; i++){
				if(document.forms[0][i].value == null || document.forms[0][i].value == ""){
					alert(document.forms[0][i].name +"을/를 입력하세요.");
					document.forms[0][i].focus();
					return false;
				}
			} */
			
			if(title == null || title == ""){
				alert('제목을 입력하세요');
				document.forms[0].title.focus();
				return false;
			}
			if (writer == null || writer == ""){
				alert('작성자를 입력하세요');
				document.forms[0].writer.focus();
				return false;
			} else if(writer.match(/^(\w+)@(\w+)[.](\w+)$/ig) == null){
				alert('이메일 형식으로 입력하세요');
				document.forms[0].writer.focus();
				return false;
			}
			if (content == null || content == ""){
				alert('내용을 입력하세요');
				document.forms[0].content.focus();
				return false;
			}
			
			if (regdate == null || regdate == ""){
				alert('날짜를 입력하세요');
				document.forms[0].regdate.focus();
				return false;
			} else if (regdate.match(/^\d\d\d\d\d\d+$/ig) == null){
				alert('숫자 형식(6자리)으로 입력하세요');
				document.forms[0].regdate.focus();
				return false;
			}
		}
	</script>
</body>
</html>