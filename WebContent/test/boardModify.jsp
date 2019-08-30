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
	<form action="modifyFinish.do" method="post" id="fr" onsubmit='return filesListing();'>
		<input type="hidden" name="idx" value="${param.idx}">
		<input type="hidden" name="moNum" value="${param.moNum}">
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
				<tr id="file${fl.num}">
					<th colspan="3">첨부파일</th>
					<td colspan="7">${fl.filename} 
					<a href="javascript:void(0);" onclick="insertMyImageAction('${fl.filename}')">삽입</a> 
					<a href="javascript:void(0);" onclick="deleteMyImageAction(${fl.num})">삭제</a>
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
	var sel_files = [];
	var in_files = [];
	var index = 0;
	var filesArr;
	var sumSize = 0;

	window.onload = function() {
		xE.w = document.getElementById("content2").contentWindow;
		xE.d = xE.w.document;
		xE.d.write("<!DOCTYPE html><html><head></head><body></body></html>");
		xE.d.designMode = "on";
		xE.d.getElementsByTagName("body")[0].innerHTML = '${article.content}';
		
		window.URL = window.URL || window.webkitURL;

		const fileSelect = document.getElementById("fileSelect"), fileElem = document
				.getElementById("fileElem"), fileList = document
				.getElementById("fileList");

		fileSelect.addEventListener("click", function(e) {
			if (fileElem) {
				fileElem.click();
			}
			e.preventDefault(); // prevent navigation to "#"
		}, false);

		var target = xE.d.getElementsByTagName("body")[0];

		var observer = new MutationObserver(function(mutations) {
			mutations.forEach(function(mutation) {
				if (!mutation.removedNodes)
					return

				

				for (var i = 0; i < mutation.removedNodes.length; i++) {
					var node = mutation.removedNodes[i];
					console.log(node.id);
					if (node.className === "myimages") {
						isloading.start();
						while (xE.d.getElementById("upDiv"+node.id.substring(5))) {
							xE.d.getElementById("upDiv" + node.id.substring(5)).remove();
						}
						document.getElementById(node.id).parentNode.remove();
						isloading.stop();
					}
				}
				
			});
			
		});

		var config = {
			attributes : true,
			childList : true,
			characterData : true,
			subtree : true || null,
			attributeOldValue : true || null,
			characterDataOldValue : true || null,
		}; // 감시할 내용 설정
		observer.observe(target, config); // 감시할 대상 등록

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
			isloading.start();
			document.getElementById("filemsg").innerHTML = "";
			const list = document.createElement("ul");

			filesArr = Array.prototype.slice.call(files);

			fileList.appendChild(list);
			
			
			filesArr.forEach(function(f) {
				sumSize += f.size;
				console.log(f.size);
			});
			
			if (sumSize > 10485760) {
				alert("사이즈가 초과하였습니다 \n 최대용량 : 10,485,760bytes 현재용량 : "+sumSize+"bytes");
				
				isloading.stop();
				return;
			}
			
			// for (let i = 0; i < files.length; i++) {
			filesArr.forEach(function(f) {

						const li = document.createElement("li");
						li.id = "liImg" + index;
						li.className = "liImg";
						list.appendChild(li);

						const img = document.createElement("img");
						img.src = window.URL.createObjectURL(f);
						img.id = "upImg" + index;
						img.alt = f.name;
						img.height = 60;

						li.appendChild(img);
						insertImageAction(index);
						const info = document.createElement("span");
						info.innerHTML = f.name
								+ ": "
								+ f.size
								+ " bytes <a href=\"javascript:void(0);\" onclick=\"insertImageAction("
								+ index
								+ ")\">삽입</a> <a href=\"javascript:void(0);\" onclick=\"deleteImageAction("
								+ index + ")\">삭제</a>";
						li.appendChild(info);
						sumSize += f.size;
						in_files.push(f.name);
						sel_files.push(f);
						index = document.getElementsByClassName("liImg").length;
						
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
			isloading.stop();
			
		}
	}

	function deleteImageAction(index) {
		isloading.start();
		sel_files.splice(index, 1);
		var img_id = document.getElementById("liImg" + index);
		while (xE.d.getElementById("upImg" + index)) {
			xE.d.getElementById("upImg" + index).parentNode.remove();
		}
		img_id.remove();
		isloading.stop();
	}

	function insertImageAction(index) {
		isloading.start();
		var output = xE.d.getElementsByTagName("body")[0];
		var img_id = document.getElementById("upImg" + index);
		var cln = img_id.cloneNode(true);
		var div = document.createElement("div");
		div.className = "divImg";
		div.id = "upDiv" + index;
		cln.className = "myimages";
		div.appendChild(cln);
		output.appendChild(div);
		isloading.stop();
	}

	function insertMyImageAction(filename) {
		var output = xE.d.getElementsByTagName("body")[0];
		var myimg = document.createElement("img");
		myimg.src = "upload/"+filename;
		myimg.height = 100;
		output.appendChild(myimg);
	}
	
	function deleteMyImageAction(filenum) {
		$.ajax({
			url:"deleteFile.do",
			data:{"num":filenum},
			success: function(result){
				alert("서옥ㅇ");
				console.log(result);
				document.getElementById("file"+filenum).remove();
				while (xE.d.querySelector("img[alt='"+result+"']")){
					xE.d.querySelector("img[alt='"+result+"']").parentNode.remove();
				}
			
		}});
	}
	
	function deleteKeyImageAction() {
		console.log("짜잔");

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

		reader.onload = function() {
			var dataURL = reader.result;
			var output = xE.d.getElementsByTagName("body")[0];
			output.innerHTML += "<br/><img src='"+dataURL+"' width='200px' height='auto'><br/>";
			output.focus();
		};
		reader.readAsDataURL(input.files[0]);
	}

	function filesListing() {
		isloading.start();
		var formData = new FormData();
		var moNumm = ${param.moNum};

		for (var i = 0; i < sel_files.length; i++) {
			var name = "image_" + i;
			formData.append(name, sel_files[i]);
		}
		// formData.append("fileObj",files[i]);
		formData.append("moNum", moNumm);
		formData.append("image_count", sel_files.length);

		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			
			if (this.readyState == 4 && this.status == 200) {
				
			
				var fileObj = JSON.parse(xhttp.responseText);
				// Typical action to be performed when the document is ready:
				var output = xE.d.getElementsByTagName("body")[0];
				console.log(fileObj.filesList.length);
				// var kk;
				//for(kk in fileObj.filesList) {
				for (var kk = 0; kk < fileObj.filesList.length; kk++) {
					console.log(document.images[kk].id);
					xE.d.getElementById(document.images[kk].id).src = "upload/"
							+ fileObj.filesList[kk].filename;

					var inputS = document.createElement("input");
					inputS.type = "hidden";
					inputS.name = "files";
					inputS.value = fileObj.filesList[kk].fileNum;
					fileList.appendChild(inputS);

				}
				// output.innerHTML +=  "<br/><img src='upload/"+jobj.filename+"' width='200px' height='auto'><br/>";

				var content2 = xE.d.getElementsByTagName("body")[0].innerHTML;
				document.forms["fr"].content.value = content2;
				
				return formCheck();
				
			}
		};
		xhttp.open("POST", "file.do", false);
		xhttp.send(formData);

	}

	function formCheck() {

		// insertContent();

		var title = document.forms["fr"].title.value;
		var writer = document.forms["fr"].writer.value;
		// var filename2 = document.forms[0].filename2.files[0];

		var content = document.forms["fr"].content.value;
		// document.forms[0].filename.files[0] = filename2;
		//content = content2;

		if (title == null || title == "") {
			alert('제목을 입력하세요');
			document.forms["fr"].title.focus();
			return false;
		}


		if (content == null || content == "") {
			alert('내용을 입력하세요');
			document.forms["fr"].content.focus();
			return false;
		}
		
	}

	isloading = {
		start : function() {
			if (document.getElementById('wfLoading')) {
				return;
			}
			var ele = document.createElement('div');
			ele.setAttribute('id', 'wfLoading');
			ele.classList.add('loading-layer');
			ele.innerHTML = '<span class="loading-wrap"><span class="loading-text"><span>.</span><span>.</span><span>.</span></span></span>';
			document.body.append(ele);

			// Animation
			ele.classList.add('active-loading');
		},
		stop : function() {
			var ele = document.getElementById('wfLoading');
			if (ele) {
				ele.remove();
			}
		}
	}
</script>
</body>
</html>