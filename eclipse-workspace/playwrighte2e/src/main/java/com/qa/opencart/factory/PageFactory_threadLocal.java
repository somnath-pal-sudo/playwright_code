package com.qa.opencart.factory;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;
import com.microsoft.playwright.Browser;
import com.microsoft.playwright.BrowserContext;
import com.microsoft.playwright.BrowserType;
import com.microsoft.playwright.Page;
import com.microsoft.playwright.Playwright;

public class PageFactory_threadLocal {
	Playwright playwright;
	BrowserContext bxc;
	Browser bw;
	Page page;
	Properties prop;
	
	private static  ThreadLocal<Browser> tlBrowser=new ThreadLocal<>();
	private static ThreadLocal<Playwright> tlPlaywright=new ThreadLocal<>();
	private static ThreadLocal<BrowserContext> tlBrowserContext=new ThreadLocal<>();
	private static ThreadLocal<Page> tlPage=new ThreadLocal<>();

	public static Playwright  getPlaywright() {
		return tlPlaywright.get();
	}
	public static Browser  getBrowser() {
		return tlBrowser.get();
	}
	public static BrowserContext  getBrowserContext() {
		return tlBrowserContext.get();
	}
	public static Page  getPage() {
		return tlPage.get();
	}
	
	
	
	public Page initBrowser(Properties prop) {
		String browserName=prop.getProperty("browser").trim();
		System.out.println("Browser name is " + browserName);
		
		tlPlaywright.set(Playwright.create());
		
		switch(browserName.toLowerCase()) {
				
				case "chromium":
					//bw=playwright.chromium().launch(new BrowserType.LaunchOptions().setHeadless(false).setSlowMo(2000));
					tlBrowser.set(getPlaywright().chromium().launch(new BrowserType.LaunchOptions().setHeadless(false).setSlowMo(2000)));
					break;
				
				case "firefox":
					tlBrowser.set(getPlaywright().firefox().launch(new BrowserType.LaunchOptions().setHeadless(false)));
					break;
				case "safari":
					tlBrowser.set(getPlaywright().webkit().launch(new BrowserType.LaunchOptions().setHeadless(false)));
					break;
				case "chrome":
					tlBrowser.set(getPlaywright().chromium().launch(new BrowserType.LaunchOptions().setChannel("chrome").setHeadless(false)));
					break;
		default:
			System.out.println("Pl pass the correct browser type");
			break;
		}
		
		tlBrowserContext.set(getBrowser().newContext());
		tlPage.set(getBrowserContext().newPage());
		getPage().navigate(prop.getProperty("url").trim());
		
		
		return getPage();
	
	}
	public Properties init_prop() throws FileNotFoundException {
		FileInputStream fis=new FileInputStream("C:\\Users\\psomn\\eclipse-workspace\\playwrighte2e\\src\\config\\config.properties");
		Properties prop=new Properties();
		try {
			prop.load(fis);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return prop;
		
		
	}

}
