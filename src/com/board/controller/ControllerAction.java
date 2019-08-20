package com.board.controller;

import java.io.IOException;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.Map;
import java.util.ResourceBundle;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class ControllerAction extends HttpServlet {
	
	private Map commandMap = new HashMap(); // 명령어와 명령어 처리 클래스를 쌍으로 저장
	
	public void init(ServletConfig config) throws ServletException {
		
		loadProperties("com/board/properties/Command");
		
	}
	
	private void loadProperties(String path) {
		// 누구를 실행할지를 rb에 저장
		ResourceBundle rbHome = ResourceBundle.getBundle(path);
		
		Enumeration<String> actionEnumHome = rbHome.getKeys();
		
		while (actionEnumHome.hasMoreElements()) {
			
			String command = actionEnumHome.nextElement();
			
			String className = rbHome.getString(command);
			
			try {
				// 해당 문자열을 클래스로 만든다
				Class commandClass = Class.forName(className);
				
				// 해당 클래스의 객체를 생성
				Object commandInstance = commandClass.newInstance();
				
				commandMap.put(command, commandInstance);
				
			} catch (ClassNotFoundException e) {
				continue;
			} catch (InstantiationException e) {
				e.printStackTrace();
			} catch (IllegalAccessException e) {
				e.printStackTrace();
			}
		}
	}
	
	public void doGet(HttpServletRequest request, HttpServletResponse response)
					  throws ServletException, IOException {
		requestPro(request, response);
	}
	
	public void doPost(HttpServletRequest request, HttpServletResponse response)
					   throws ServletException, IOException {
		requestPro(request, response);
	}
	
	public void requestPro(HttpServletRequest request, HttpServletResponse response)
						   throws ServletException, IOException {
		String view = null;
		CommandAction com = null;
		
		try {
			String command = request.getRequestURI();
			if(command.indexOf(request.getContextPath()) == 0) {
				command = command.substring(request.getContextPath().length());
			}
			
			com = (CommandAction) commandMap.get(command);
			
			if(com == null) {
				System.out.println("not found : " + command);
				return;
			}
			
			view = com.requestPro(request, response);
			if (view == null) {
				return;
			}
		} catch (Throwable e) {
			throw new ServletException(e);
		}
		
		if(view == null)
			return;
		
		RequestDispatcher dispatcher = request.getRequestDispatcher(view);
		dispatcher.forward(request, response);
	}
	
}

