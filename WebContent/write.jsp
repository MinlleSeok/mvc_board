<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>본격 게시판 - 글쓰기</title>

</head>
<body>
	<form action="insert.do" method="post" enctype="multipart/form-data" onsubmit='return formCheck();'>
		<input type="hidden" name="moNum" value="${param.moNum}">
		제목 : <input type="text" name="title" /><br/>
		작성자 : <input type="text" name="writer" /><br/>
		파일 : <input type="file" name="filename" multiple accept="image/*" id="fileElem" style="display:none" onchange="handleFiles(this.files)"><br/>
		<a href="#" id="fileSelect">Select some files</a><br/>
		<div id="fileList">
			<p id="filemsg"></p>
		</div><br/>
		내용 : <iframe id="content2" src="about:blank"></iframe><br/>
		<input type="submit" value="작성" />
		<textarea rows="5" cols="20" name="content" style="display:none;"></textarea>

	</form>
	<script>
	/*
	if (x.addEventListener) {
	  x.addEventListener("change", fileCheck);
	} else if (x.attachEvent) {
	  x.attachEvent("change", fileCheck);
	}
	*/

	var xE = {};
	
	window.onload = function() {
		/*document.forms[0].innerHTML = "제목 : <input type='text' name='title' /><br/>"
		+ "작성자 : <input type='text' name='writer' /><br/>"
		+ "파일 : <input type='file' id='fileElem' multiple accept='image/*' style='display:none' onchange='handleFiles(this.files)'><br/>"
		+ "<a href='#' id='fileSelect'>Select some files</a><br/>"
		+ "<div id='fileList'>"
		+ "<p>No files selected!</p>"
		+ "</div><br/>"
		+ "내용 : <iframe id='content2' src='about:blank'></iframe><br/>"
		+ "<input type='submit' value='작성' />";*/
		
		xE.w = document.getElementById("content2").contentWindow;
		xE.d = xE.w.document;
		xE.d.write("<!DOCTYPE html><html><head></head><body></body></html>");
		xE.d.designMode = "on";
		
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
	      
	      var formData = new FormData(document.forms[0]);
	      formData.append("fileObj",files[i]);
	      
	      
	      var xhttp = new XMLHttpRequest();
	      xhttp.onreadystatechange = function() {
	          if (this.readyState == 4 && this.status == 200) {
	             // Typical action to be performed when the document is ready:
	             var output = xE.d.getElementsByTagName("body")[0];
				      output.innerHTML +=  "<br/><img src='upload/"+xhttp.responseText+"' width='200px' height='auto'><br/>";
	          }
	      };
	      xhttp.open("POST", "file.do", true);
	      xhttp.send(formData);
	      
	    }
	  }
	}
	
		function insertContent() {
			var content2 = xE.d.getElementsByTagName("body")[0].innerHTML;
			document.forms[0].content.value = content2;	
		}
	
		function fileCheck(event) {
			var x = document.getElementById("myFile");
			var txt = "";
			var input = event.target;
				
				var reader = new FileReader();

				reader.onload = function(){
				      var dataURL = reader.result;
				      var output = xE.d.getElementsByTagName("body")[0];
				      output.innerHTML +=  "<br/><img src='"+dataURL+"' width='200px' height='auto'><br/>";
				      output.focus();
				    };
				    reader.readAsDataURL(input.files[0]);
		}	
	
		function formCheck() {
			insertContent();
			
			var title = document.forms[0].title.value;
			var writer = document.forms[0].writer.value;
			// var filename2 = document.forms[0].filename2.files[0];
										
										
			var content = document.forms[0].content.value;
			// document.forms[0].filename.files[0] = filename2;
			//content = content2;
			
			if(title == null || title == ""){
				alert('제목을 입력하세요');
				document.forms[0].title.focus();
				return false;
			}
			
			if (writer == null || writer == ""){
				alert('작성자를 입력하세요');
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