<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
<div class="row">
	<c:forEach items="${array}" var="a">
		
  <div class="column">
    <div class="card"><a href="list.do?moNum=${a.num}">${a.name}</a> <br> ${a.category}</div>
  </div>
  
	</c:forEach>
	</div>
</body>
</html>