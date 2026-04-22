package com.qa.opencart.pages;
import com.microsoft.playwright.*;


public class HomePage {
	 private Page page;
	
	//all locators on homepage//
	private String searchfldlocator="//input[@name='search']";
	private String searchbtnlocator="//span[@class='input-group-btn']";
	private String searchpageheaderlocator="//*[@id='content']//h1";
	private String myaccountlocator="//span[normalize-space()='My Account']";
	private String loginbtn="a:text('Login')";
	
	public HomePage(Page page) {
		
		this.page=page;
	}
	
	public String getHomePagetitle() {
		String title=page.title();
		System.out.println("page title is " + title);
		
		return title;
	}
	
	public String homePageURL() {
		String url=page.url();
		System.out.println("page url is " + url);
		
		return url;
	}
	
	public String doSearch(String productName) {
		page.fill(searchfldlocator,productName);
		page.click(searchbtnlocator);
		String header=page.textContent(searchpageheaderlocator);
		System.out.println(header);
		return header;
		
	}
	
	public LoginPage testLoginpage() {
		page.click(myaccountlocator);
		page.click(loginbtn);
		return new LoginPage(page);
		
		}
	
	
	

}
