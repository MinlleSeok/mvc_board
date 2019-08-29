<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>본격 게시판 - 글쓰기</title>

</head>
<body>
	<form action="insert.do" method="post" onsubmit='return formCheck();'>
		<input type="hidden" name="moNum" value="${param.moNum}">
		제목 : <input type="text" name="title" /><br/>
		작성자 : <input type="text" name="writer" /><br/>
		if(관리자면) 공지사항:<input type="checkbox" name="pin"><br/>
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
	var sel_files = [];
	var index = 0;
	var filesArr;
	
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
		
		xE.d.addEventListener("keyup", function (event) {
			  if (event.which === 8 || event.which === 46) {
			    var result = -1;
			    var check = false;
				  for(var z=0; z<index; z++) {
					  if(xE.d.getElementById("upImg"+z) == null){
						  result = z;
						  check = true;
					  }
			    }
			    	if(check) {
			    		sel_files.splice(result,1);
			    		document.getElementById("liImg"+result).remove();
			    		check = false;
			    		result = -1;
			    	}
			    	
			    
			  }
			  // do something
			});
	}
	
	
	
	
	window.beforeunload = function() {
  	  filesArr.forEach(function(f) {
      window.URL.revokeObjectURL(f);
  	  });
    }
	
	function deleteFile(imgNum) {
		alert(imgNum);
	}
	
	
	function handleFiles(files) {
		
	
	  if (!files.length) {
	  	
		document.getElementById("filemsg").innerHTML = "";
		document.getElementById("filemsg").innerHTML = "사진읍따";
		  
	  } else {
		  document.getElementById("filemsg").innerHTML = "";
		  const list = document.createElement("ul");
		  
		  filesArr = Array.prototype.slice.call(files);
		  
	    fileList.appendChild(list);
	    
	    
	    // for (let i = 0; i < files.length; i++) {
	    filesArr.forEach(function(f) {
	    	
	    
	      const li = document.createElement("li");
	      li.id = "liImg"+index;
	      li.className = "liImg";
	      list.appendChild(li);
	      
	      
	      const img = document.createElement("img");
	      img.src = window.URL.createObjectURL(f);
	      img.id = "upImg"+index;
	      img.alt = f.name;
	      img.height = 60;
	      
	      
	      li.appendChild(img);
	      insertImageAction(index);
	      const info = document.createElement("span");
	      info.innerHTML = f.name + ": " + f.size + " bytes <a href=\"javascript:void(0);\" onclick=\"insertImageAction("+index+")\">삽입</a> <a href=\"javascript:void(0);\" onclick=\"deleteImageAction("+index+")\">삭제</a>";
	      li.appendChild(info);
	      
	   	  sel_files.push(f);
	   	  index++;
	      // var formElement = document.querySelector("form");
	      // var formData = new FormData(formElement);
	      /*
	      var formData = new FormData();
	      var moNumm = ${param.moNum};
	      
	      formData.append("fileObj",files[i]);
	      formData.append("moNum",moNumm);
	      
	      var xhttp = new XMLHttpRequest();
	      xhttp.onreadystatechange = function() {
	          if (this.readyState == 4 && this.status == 200) {
	        	var jobj = JSON.parse(xhttp.responseText);
	             // Typical action to be performed when the document is ready:
	            var output = xE.d.getElementsByTagName("body")[0];
	            var img2 = document.createElement("img");
         		img2.src = "upload/"+jobj.filename;
         		img2.id = "upImg"+jobj.fileNum;
         		img2.className = "upImg";
    			img2.height = 100;
   	      		img2.onload = function() {
   	       			window.URL.revokeObjectURL(this.src);
   	      		}
        	 	output.appendChild(img2);
			      // output.innerHTML +=  "<br/><img src='upload/"+jobj.filename+"' width='200px' height='auto'><br/>";
			      var input = document.createElement("input");
			      input.type = "hidden";
			      input.name = "files";
			      input.value= jobj.fileNum;
			      fileList.appendChild(input);
	          }
	      };
	      xhttp.open("POST", "file.do", false);
	      xhttp.send(formData);
	      */
	      
	    // }
	    });	
	  }
	}
	
	function deleteImageAction(index) {
		sel_files.splice(index,1);
		var img_id = document.getElementById("liImg"+index);
		xE.d.getElementById("upImg"+index).remove();
		img_id.remove();
		alert(sel_files);
	}
	
	function insertImageAction(index) {
		var output = xE.d.getElementsByTagName("body")[0];
		var img_id = document.getElementById("upImg"+index);
		var cln = img_id.cloneNode(true);
		const div = document.createElement("div");
	      div.className = "divImg";
	    
		div.appendChild(cln);
		output.appendChild(div);
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
		
		function filesListing() {

			var formData = new FormData();
		    var moNumm = ${param.moNum};
		      
		    for(var i=0; i < sel_files.length; i++) {
		    	var name = "image_"+i;
		    	formData.append(name,sel_files[i]);
		    }
		    // formData.append("fileObj",files[i]);
		    formData.append("moNum",moNumm);
		    formData.append("image_count",sel_files.length);
		    
		      var xhttp = new XMLHttpRequest();
		      xhttp.onreadystatechange = function() {
		          if (this.readyState == 4 && this.status == 200) {
		        	var fileObj = JSON.parse(xhttp.responseText);
		             // Typical action to be performed when the document is ready:
		            var output = xE.d.getElementsByTagName("body")[0];
		            console.log(fileObj.filesList.length);
		            // var kk;
					//for(kk in fileObj.filesList) {
		        	for(var kk=0; kk < fileObj.filesList.length; kk++) {
		        		xE.d.querySelectorAll(".divImg")[kk].innerHTML = "";
			            var img2 = xE.d.createElement("img");
		         		img2.src = "upload/"+fileObj.filesList[kk].filename;
		         		img2.id = "upImg"+fileObj.filesList[kk].fileNum;
		         		img2.className = "upImg";
		    			img2.height = 100;
		    			/*
		   	      		img2.onload = function() {
		   	       			window.URL.revokeObjectURL(this.src);
		   	      		}
		    			*/
		   	      		xE.d.querySelectorAll(".divImg")[kk].appendChild(img2);
		   	      		
		   	      	var inputS = document.createElement("input");
				      inputS.type = "hidden";
				      inputS.name = "files";
				      inputS.value= fileObj.filesList[kk].fileNum;
				      fileList.appendChild(inputS);
				      
				      
				    }
				      // output.innerHTML +=  "<br/><img src='upload/"+jobj.filename+"' width='200px' height='auto'><br/>";
				      
				      var content2 = xE.d.getElementsByTagName("body")[0].innerHTML;
						document.forms[0].content.value = content2;	
		          }
		      };
		      xhttp.open("POST", "file.do", false);
		      xhttp.send(formData);
		}
		
		function formCheck() {
			filesListing();
			// insertContent();
			
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