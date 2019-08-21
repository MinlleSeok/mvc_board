package com.board.action;

import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.board.bean.Board;
import com.board.controller.CommandAction;
import com.board.dao.BoardDAO;

public class ListAction implements CommandAction {

	@Override
	public String requestPro(HttpServletRequest request, HttpServletResponse response) throws Throwable {
		
		request.setCharacterEncoding("UTF-8");
		
		int page = 0;
		if(request.getParameter("page") != null) {
			page = Integer.parseInt(request.getParameter("page"));
		}
		
		ArrayList<Board> articleList = BoardDAO.getInstance().getArticleList(page);
		
		request.setAttribute("array", articleList);
		request.setAttribute("page", page);
		
		return "board.jsp";
	}

}

/*
 * 옛날 코드
try {
	String driverName = "oracle.jdbc.driver.OracleDriver";
	String url = "jdbc:oracle:thin:@localhost:1521:XE";
	ResultSet rs = null;
	
	Class.forName(driverName);
	Connection con = DriverManager.getConnection(url, "board", "12345");
	
	System.out.println("Oracle Database db connected");
	Statement stmt = con.createStatement();
	String sql = "SELECT * FROM board order by idx desc";
	
	rs = stmt.executeQuery(sql);

	ArrayList<Board> ar = new ArrayList<Board>();
	Board bd = null;
	
	while(rs.next()){
		
		bd = new Board();
		bd.setIdx(rs.getInt("idx"));
		bd.setContent(rs.getString("title"));
		bd.setCount(rs.getInt("count"));
		bd.setRegdate(rs.getString("regdate"));
		bd.setTitle(rs.getString("title"));
		bd.setWriter(rs.getString("writer"));
		ar.add(bd);
		
	}
	
	request.setAttribute("array", ar);
	
	stmt.close();
	rs.close();
	con.close();
	
} catch (Exception e){
	System.out.println("board.jsp 오류");
	System.out.println(e.getMessage());
	e.printStackTrace();	
}
*/