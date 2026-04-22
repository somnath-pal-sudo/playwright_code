package com.qa.opencart.pages;

import com.microsoft.playwright.*;


public class LoginPage {
	private Page page;
	private String appuserName="//input[@id='input-email']";
	private String apppassWord="//input[@id='input-password']";
	private String apploginBtn="//input[@type='submit']";
	private String forgotpwd="//div[@class='form-group']//a[normalize-space()='Forgotten Password']";
	private String applogoutlink="//a[@class='list-group-item'][normalize-space()='Logout']";
	
	public LoginPage(Page page) {
		
		this.page=page;
	}
	
	public String verifyurl() {
		String url=page.url();
		System.out.println(url);
		return url;
	}
	
	public String verifyloginpageTitle() {
		String title=page.title();
		System.out.println(title);
		
		return title;
		
	}
	
	public boolean linkforgotpwd() {
		
		page.focus(forgotpwd);
		return page.isVisible(forgotpwd);
	}
	
	public boolean dologin(String username,String password) throws InterruptedException {
		System.out.println("App cred is " + username + " " + password);
		page.fill(appuserName, username);
		page.fill(apppassWord, password);
		page.click(apploginBtn);
		Thread.sleep(2000);
		if(page.isVisible(applogoutlink)) {
			System.out.println("user logged in successfully.....");
			return true;
		}
		return false;
	}
	
	

}
