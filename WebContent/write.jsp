<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>본격 게시판 - 글쓰기</title>

</head>
<body>
	<form action="insert.do" method="post" enctype="multipart/form-data"> <!-- onsubmit="return formCheck();" -->
		제목 : <input type="text" name="title" /><br/>
		작성자 : <input type="text" name="writer" /><br/>
		파일 : <input type="file" name="filename" accept="image/*" id="myFile" onchange="fileCheck(event)"><br/>
		내용 : <div style="width:300px; height:auto;"><div contentEditable="true" id="content2"></div></div><br/>
		<input type="submit" />
		
	</form>
	<script>
	/*
	if (x.addEventListener) {
	  x.addEventListener("change", fileCheck);
	} else if (x.attachEvent) {
	  x.attachEvent("change", fileCheck);
	}
	*/
		function fileCheck(event) {
			var x = document.getElementById("myFile");
			var txt = "";
			var input = event.target;
				
				var reader = new FileReader();

				reader.onload = function(){
				      var dataURL = reader.result;
				      var output = document.getElementById('content2');
				      output.innerHTML +=  "<br/><img src='"+dataURL+"' width='200px' height='auto'><br/>";
				      output.focus();
				    };
				    reader.readAsDataURL(input.files[0]);
		}	
	
		function formCheck() {

			
			var title = document.forms[0].title.value;
			var writer = document.forms[0].writer.value;
			var regdate = document.forms[0].regdate.value;
			var content = document.forms[0].content.value;

			
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

		}
	</script>
</body>
</html>