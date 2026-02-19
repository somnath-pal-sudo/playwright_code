package com.qa.opencart.test;

import org.testng.Assert;
import org.testng.annotations.Test;

import com.qa.opencart.appConstant.appconstatnt;
import com.qa.opencart.basetest.basetest;
import com.qa.opencart.pages.HomePage;

public class Loginpagetest extends basetest{
	
	@Test(priority=1)
	public void navigateToLoginPage() {
		
		lp=hp.testLoginpage();
		String actualTitle=lp.verifyloginpageTitle();
		Assert.assertEquals(actualTitle,appconstatnt.LOGIN_PAGE_TITLE);
		
	}
	@Test(priority=2)
	public void checkforgotpwdlink() {
		
		Assert.assertTrue(lp.linkforgotpwd());
		
	}
	
	
	  @Test (priority=3)
	  public void checkloginaction() throws InterruptedException {
	  Assert.assertTrue(lp.dologin(prop.getProperty("username").trim(), prop.getProperty("password").trim()));
	  
	  }
	 
	 

}
