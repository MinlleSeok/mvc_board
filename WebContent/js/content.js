/**
 *	content.js
 */

// parameter값 받아오는 함수
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

//전역변수 선언
var moNum = getParameterByName('moNum');
var idx = getParameterByName('idx');
var xE = {};

// 다운로드 기능 함수
function onDownload(idx) {
	var o = document.getElementById("ifrm_filedown");
	o.src = "download.do?moNum="+moNum+"&idx="+idx;
}

//페이지 로딩시 
window.onload = function() {
	
	/**
	 *	코멘트 작성 에디터 세팅
	 */
	xE.w = document.getElementById("comment").contentWindow;
	xE.d = xE.w.document;
	xE.d.write("<!DOCTYPE html><html><head></head><body></body></html>");
	xE.d.designMode = "on";
	xE.w.focus();
	
	// 코멘트 불러오기
	printComment(idx);
}

/**
 *	코멘트 삽입 ajax 함수
 */
function insertComment(boNum) {
	var content = xE.d.body.innerHTML;
	$.ajax({
		url: "insert.co",
		type: "post",
		datatype : "json",
		data : {"content":content,
				"boNum":boNum,
				"moNum":moNum},
		success : function(data) {
			content = "";
			xE.d.body.innerText = "";
			printComment(boNum);
		}
	});
}

/**
 *	코멘트 출력 함수
 */
function printComment(boNum) {
	$.ajax({
		url: "print.co?boNum="+boNum+"&moNum="+moNum,
		cache : false,
		success : function(data) {
			var obj = JSON.parse(data);
			var comList = $("table");
			$(".comment").remove();
			
			var i;
			for(i in obj.comments) {
				
				// <!-- 기본 코멘트 출력 본체
				comList.append("<tr class='comment'>"
							  +	"<td colspan='2'>"+obj.comments[i].userNum+"</td>"
							  + "<td colspan='6' style='padding-left: "+(obj.comments[i].reDep)*10+"px;' id='comContent"+obj.comments[i].num+"'></td>"
							  + "<td colspan='2' id='comDetail"+obj.comments[i].num+"'></td></tr>");
				// 기본 코멘트 출력 본체 -->
				
				// <!-- 답글 @이름 구현
				if(obj.comments[i].userNum == obj.comments[i].reUserNum) {
					$("#comContent"+obj.comments[i].num).html(obj.comments[i].content);
				} else {
					$("#comContent"+obj.comments[i].num).html("@"+obj.comments[i].reUserNum+" "+obj.comments[i].content);
				}
				// 답글 @이름 구현 -->
				
				$("#comDetail"+obj.comments[i].num).html("<a href='#' onclick='reComment(this, "+idx+", "+obj.comments[i].num+", "+obj.comments[i].reDep+")'>답글</a> <a href='#' onclick='modifyComment(this, "+moNum+", "+idx+", "+obj.comments[i].num+")'>수정</a> <a href='#' onclick='deleteComment("+moNum+", "+idx+", "+obj.comments[i].num+")'>삭제</a>");

			}
		}
		
	});
}

/**
 *	코멘트 답글 창 생성 함수
 */
function reComment(meee,boNum,reNum,reDep) {
	
	// 다른 코멘트 답글 창이 열려있을 때 닫는 기능
	if ($("tr[id^='reComment']").length > 0) {
		$("tr[id^='reComment']").find('td > div').stop().slideUp("slow", function(){
         	$("tr[id^='reComment']").remove();
        });
	}
	
	// 2단 코멘트인지 3단 이상 코멘트인지 검사
	var comhtml = "";
	if(reDep > 0){
		comhtml = "<tr id='reComment"+reNum+"'><td colspan='7'><iframe id='reComment' src='about:blank'></iframe></td><td colspan='3'><button onclick='reReCommentInsert("+boNum+","+reNum+","+moNum+");'>댓글</button></td></tr>";
	} else {
		comhtml = "<tr id='reComment"+reNum+"'><td colspan='7'><iframe id='reComment' src='about:blank'></iframe></td><td colspan='3'><button onclick='reCommentInsert("+boNum+","+reNum+","+moNum+");'>댓글</button></td></tr>";
	}

	// 댓글 수정 창이 열려있으면 닫아주는 기능
	if($("#modifyComment"+reNum).length > 0){	
		$("#modifyComment"+reNum).find('td > div').stop().slideUp("slow", function(){
    		$("#modifyComment"+reNum).remove();
    	});
	}
	
	// 이미 현재 코멘트 답글 창이 열려있을 때 닫는 기능
	if($("#reComment"+reNum).length > 0){
		
		// 브라우저 슬라이드
		var offset = $(meee).offset();
        $("html").animate({scrollTop : offset.top}, 200);

        $("#reComment"+reNum).find('td > div').stop().slideUp("slow", function(){
        	$("#reComment"+reNum).remove();
        });
        
    // 모든 경우의 수 가 아닐 경우 코멘트 답글 창 생성
	} else {
		
		// 브라우저 슬라이드
		var offset = $(meee).offset();
        $("html").animate({scrollTop : offset.top}, 200);
        
        // this ($(meee)값)로 잡아온 요소의 아래에 코멘트 답글 창 넣기위한 기능
        $(meee).parent().parent().after(comhtml);
        $("#reComment"+reNum).children('td').wrapInner('<div style="display: none;" />');
        $("#reComment"+reNum).show().find('td > div').stop().slideDown("slow");
        
        // 코멘트 답글 창 에디터 활성화
        var cc = {};
			cc.w = document.getElementById("reComment"+reNum).getElementsByTagName("iframe")[0].contentWindow;
			cc.d = cc.w.document;
			cc.d.write("<!DOCTYPE html><html><head></head><body></body></html>");
			cc.d.designMode = "on";
			cc.w.focus();
	}
}

/**
 *	코멘트 수정 창 생성 함수
 */
function modifyComment(meee,moNum,boNum,num) {
	
	var comhtml = "<tr id='modifyComment"+num+"'><td colspan='7'><iframe id='modifyComment' src='about:blank'></iframe></td><td colspan='3'><button onclick='commentModify("+moNum+","+boNum+","+num+");'>댓글</button></td></tr>";
	
	// 기존의 코멘트 답글 창이 열려있을 때 닫는 기능
	if($("#reComment"+num).length > 0){	
		$("#reComment"+num).find('td > div').stop().slideUp("slow", function(){
    		$("#reComment"+num).remove();
    	});
	}
	
	// 기존의 댓글 수정 창이 열려있으면 닫아주는 기능
	if($("#modifyComment"+num).length > 0){
		
		var offset = $(meee).offset();
        $("html").animate({scrollTop : offset.top}, 200);

        $("#reComment"+num).find('td > div').stop().slideUp("slow", function(){

        	$("#reComment"+num).remove();

        	 });
        
    // 모든 경우의 수 가 아닐 경우 코멘트 수정 창 생성
	} else {
		
		// 브라우저 슬라이드
		var offset = $(meee).offset();
        $("html").animate({scrollTop : offset.top}, 200);
        
     // this($(meee)값)로 잡아온 요소의 아래에 코멘트 수정 창 넣기위한 기능
        $(meee).parent().parent().after(comhtml);
        $("#modifyComment"+num).children('td').wrapInner('<div style="display: none;" />');
        $("#modifyComment"+num).show().find('td > div').stop().slideDown("slow");
        
     // 코멘트 수정 창 에디터 활성화 및 ajax로 코멘트 내용 불러오기
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
}

/**
 *	코멘트 답글 삽입 함수
 */
function reCommentInsert(boNum,reNum,moNum) {
	
	// 내용 가져올 변수 선언
	var content = document.getElementById("reComment"+reNum).getElementsByTagName("iframe")[0].contentWindow.document.getElementsByTagName("BODY")[0].innerHTML;
	
	// ajax 호출
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

/**
 *	코멘트 답의 답글(대댓글) 삽입 함수
 */
function reReCommentInsert(boNum,reNum,moNum) {
	
	// 내용 가져올 변수 선언
	var content = document.getElementById("reComment"+reNum).getElementsByTagName("iframe")[0].contentWindow.document.getElementsByTagName("BODY")[0].innerHTML;
	
	// ajax 호출
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

/**
 *	코멘트 수정 함수
 */
function commentModify(moNum,boNum,num) {
	
	// 내용 가져올 변수 선언
	var content = document.getElementById("modifyComment"+num).getElementsByTagName("iframe")[0].contentWindow.document.getElementsByTagName("BODY")[0].innerHTML;
	
	// ajax 호출
	$.ajax({
		url: "modify.co",
		type: "post",
		datatype : "json",
		data : {"content":content,
				"boNum":boNum,
				"num":num,
				"moNum":moNum},
		success : function(data) {
			// 코멘트 재출력
			printComment(boNum);
			
			// 기존 코멘트 창 닫기
			$("#modifyComment"+num).find('td > div').stop().slideUp("slow", function(){
	        	$("#modifyComment"+num).remove();
	        });
		}	
	});
}

/**
 *	코멘트 삭제 함수
 */
function deleteComment(moNum,boNum,num) {
	
	// ajax 호출
	$.ajax({
		url: "delete.co",
		type: "post",
		datatype : "json",
		data : {"moNum":moNum,
				"boNum":boNum,
				"num":num},
		success : function(data) {
			
			// 코멘트 재출력
			printComment(boNum);
			
			// 기존 코멘트 창 닫기
			if($("#reComment"+num).length > 0){	
				$("#reComment"+num).find('td > div').stop().slideUp("slow", function(){
	        		$("#reComment"+num).remove();
				});
			}
			
			// 기존 코멘트 창 닫기
			if($("#modifyComment"+num).length > 0){	
				$("#modifyComment"+num).find('td > div').stop().slideUp("slow", function(){
	        		$("#modifyComment"+num).remove();
	        	});
			}
		}	
	});
}