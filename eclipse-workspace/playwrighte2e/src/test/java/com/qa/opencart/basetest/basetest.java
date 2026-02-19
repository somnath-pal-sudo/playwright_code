package com.qa.opencart.basetest;

import java.io.FileNotFoundException;
import java.util.Properties;

import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;

import com.microsoft.playwright.Page;
//import com.qa.opencart.factory.PageFactory;
import com.qa.opencart.factory.PageFactory_threadLocal;
import com.qa.opencart.pages.HomePage;
import com.qa.opencart.pages.LoginPage;

public class basetest {
	
	Page page;
	protected HomePage hp;
	protected Properties prop;
	protected LoginPage lp;
	
	
	@BeforeTest
	public void setup() throws FileNotFoundException {
		PageFactory_threadLocal pf=new PageFactory_threadLocal();
		prop=pf.init_prop();
		page=pf.initBrowser(prop);
		hp=new HomePage(page);
		lp=new LoginPage(page);
		
	}
	
	 @AfterTest 
	  public void tearDown() { 
		  page.context().browser().close();
	  
	  }

}
