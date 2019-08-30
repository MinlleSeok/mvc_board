package com.controller.action;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/*
 *	Action 클래스에 구현하는 기본 CommandAction
 */

public interface CommandAction {

	public String requestPro(HttpServletRequest request, 
							HttpServletResponse response) throws Throwable;
}
