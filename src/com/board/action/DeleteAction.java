package com.board.action;

import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.board.db.BoardDAO;
import com.board.db.Files;
import com.controller.action.CommandAction;

/*
 * board Delete Action
 */

public class DeleteAction implements CommandAction {

	@SuppressWarnings("deprecation")
	@Override
	public String requestPro(HttpServletRequest request, HttpServletResponse response) throws Throwable {
		
		int idx = Integer.parseInt(request.getParameter("idx"));
		int moNum = Integer.parseInt(request.getParameter("moNum"));
		
		HashMap<String, Object> map = new HashMap<String, Object>();
		map.put("idx", idx);
		map.put("moNum", moNum);
		
		// Board article = BoardDAO.getInstance().getArticle(map);
		ArrayList<Files> filesList = BoardDAO.getInstance().getFiles(map);
		
		for (int i = 0; i < filesList.size(); i++) {
			String filename = filesList.get(i).getFilename();
			String uploadFileName = request.getRealPath("/upload") + "/" + filename;
			File uploadfile = new File(uploadFileName);
			
			if (uploadfile.exists() && uploadfile.isFile()) {
				uploadfile.delete();
				BoardDAO.getInstance().deleteFile(filesList.get(i).getNum());
			}
		}
		
		BoardDAO.getInstance().deleteArticle(idx);

		request.setAttribute("url", "list.do?moNum="+moNum);

		return "redirect2.jsp";
	}

}
