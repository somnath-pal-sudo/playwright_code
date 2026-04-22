package com.qa.opencart.test;

import org.testng.Assert;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

import com.qa.opencart.appConstant.appconstatnt;
import com.qa.opencart.basetest.basetest;

public class Homepagetest extends basetest {
	
	
	@Test
	public void testHomePage() {
		String actualTitle=hp.getHomePagetitle();
		Assert.assertEquals(actualTitle, appconstatnt.HOME_PAGE_TITLE);
		String actualpageURL=hp.homePageURL();
		Assert.assertEquals(actualpageURL,prop.getProperty("url"));
	
	}
	
	@DataProvider
	public Object[][] getProductData(){
		return new Object[][]{
		
		{"MacBook"},{"iphone"}
		
	};
	
	}
	
	
	@Test(dataProvider="getProductData")
	public void testSearch(String ProductName) {
		String actualHeader=hp.doSearch(ProductName);
		System.out.println(actualHeader);
		//Assert.assertEquals(actualHeader,"search -"+ProductName);
	}
	
	
	
	
	
	 
	 

}
