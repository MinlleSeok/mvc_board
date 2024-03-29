package com.board.action;


import java.io.File;
import java.io.PrintWriter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

import com.board.addon.Thumbnail;
import com.board.db.BoardDAO;
import com.board.db.Files;
import com.controller.action.CommandAction;
import com.oreilly.servlet.MultipartRequest;
import com.oreilly.servlet.multipart.DefaultFileRenamePolicy;

/*
 * board File upload Action - ajax
 */

public class FileAction implements CommandAction {

	@SuppressWarnings({ "unchecked", "deprecation" })
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
		String[] arr = null;
		int count = 0;
		
		// String regip = request.getRemoteAddr();

		try {
			multi = new MultipartRequest(request, savePath, sizeLimit, "UTF-8", new DefaultFileRenamePolicy());
			
			count = Integer.parseInt(multi.getParameter("image_count"));
			arr = new String[count];
			
			for(int i=0; i<count; i++) {
				arr[i] = multi.getFilesystemName("image_"+i);
				File destFile = new File(savePath+"/tn_"+arr[i]);
				Thumbnail.resize(multi.getFile("image_"+i), destFile, 100, Thumbnail.RATIO);
			}
			
			moNum = Integer.parseInt(multi.getParameter("moNumm"));
			
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

		int[] fileNums = new int[count];
			if(filename != null) {
			for(int i=0; i<count; i++) {	
			Files file = new Files();
			file.setFilename(arr[i]);
			file.setUserNum(userNum);
			file.setMoNum(moNum);
			
			fileNums[i] = BoardDAO.getInstance().insertFile(file);
			
			}
			JSONObject obj = new JSONObject();
			JSONArray array = new JSONArray();
			
			for(int i=0; i<count; i++) {	
			JSONObject jobj = new JSONObject();
			jobj.put("filename", arr[i]);
			jobj.put("fileNum",fileNums[i]);
			array.add(jobj);
			System.out.println(arr[i]);
			}
			obj.put("filesList",array);
			out.print(obj.toString());
			out.flush();
			}

		//request.setAttribute("page", page);
		
		return null;
	}

}
