package com.board.action;

import java.io.File;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.board.db.BoardDAO;
import com.board.db.Files;
import com.controller.action.CommandAction;

public class FileDeleteAction implements CommandAction {

	@Override
	public String requestPro(HttpServletRequest request, HttpServletResponse response) throws Throwable {
		
		int num = Integer.parseInt(request.getParameter("num"));
		Files myfile = BoardDAO.getInstance().downFile(num);
		String filename = myfile.getFilename();
		String uploadFileName = request.getRealPath("/upload")+"/"+filename;
		
		File uploadfile = new File(uploadFileName);
		
		if(uploadfile.exists() && uploadfile.isFile()) {
			uploadfile.delete();
		}
		BoardDAO.getInstance().deleteFile(num);
		
		return null;
	}

}
