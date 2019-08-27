package com.board.action;


import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

import com.board.db.BoardDAO;
import com.board.db.Files;
import com.controller.action.CommandAction;
import com.oreilly.servlet.MultipartRequest;
import com.oreilly.servlet.multipart.DefaultFileRenamePolicy;

public class FileAction implements CommandAction {

	@SuppressWarnings("unchecked")
	@Override
	public String requestPro(HttpServletRequest request, HttpServletResponse response) throws Throwable {
		
		///////////////////////////////////////////////////
		// 초기 받아온 값 변수 저장
		///////////////////////////////////////////////////
		
		request.setCharacterEncoding("UTF-8");
		response.setContentType("charset=UTF-8");
		response.setCharacterEncoding("UTF-8");
		
		MultipartRequest multi = null;
		
		int sizeLimit = 10 * 1024 * 1024;
		String savePath = request.getRealPath("/upload");

		String filename = "";
		
		int userNum = 1;
		int moNum = 0;
		if(request.getParameter("moNum") != null) {
			moNum = Integer.parseInt(request.getParameter("moNum"));
		}
		
		// String regip = request.getRemoteAddr();

		try {
			multi = new MultipartRequest(request, savePath, sizeLimit, "UTF-8", new DefaultFileRenamePolicy());

			filename = multi.getFilesystemName("fileObj");
			
			
		} catch (Exception e) {
			e.printStackTrace();
			
		}

		// System.out.println(filename);
		PrintWriter out = response.getWriter();
		
		///////////////////////////////////////////////////
		// 유효성 검사
		///////////////////////////////////////////////////
		
		// boolean check = false;
		// String checkMsg = "";

	
			if(filename != null) {
				
			Files file = new Files();
			file.setFilename(filename);
			file.setUserNum(userNum);
			file.setMoNum(moNum);
			
			int fileNum = BoardDAO.getInstance().insertFile(file);
			
			JSONObject jobj = new JSONObject();
			jobj.put("filename", filename);
			jobj.put("fileNum",fileNum);
			
			out.print(jobj.toString());
			
			}

		//request.setAttribute("page", page);
		
		return null;
	}

}
