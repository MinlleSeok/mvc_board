<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
	<form action="request.bo" method="post">
		게시판명 : <input type="text" name="name">
		카테고리 : <select name="category">
					<option value="game">게임</option>
					<option value="sport">스포츠</option>
					<option value="issue">이슈</option>
					<option value="love">연애</option>
				</select>
		<input type="submit">
	</form>
</body>
</html>