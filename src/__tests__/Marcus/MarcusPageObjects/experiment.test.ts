import { By, WebDriver, until } from "selenium-webdriver";
import { forEachChild } from "typescript";
import { homePageObject } from "./HomePageObject";


describe("testing the functionality of home page",() => {
    const page = new homePageObject()
    beforeEach(async () => {
        await page.navigate();
    });
    afterAll(async () => {
        await page.driver.quit();
    });
    test('there are not buttons that lead to a dummy site', async () => {
        let myAttribute = await page.driver.findElement(page.homePageBtns).getAttribute("href");

        if(myAttribute === "http://www.prestashop.com/"){
        console.log("No dummy link found")}
        else{
        console.log("There is a dummy link among us")}
    });
    // test('buttons take to right page, should fail if any take user out of site', async () => {
    //     let homeBtnAttribute = await page.driver.findElement(page.homePageBtns).getAttribute('href');
    //     expect(homeBtnAttribute).toContain("http:")
    // })
    test('testing that the search bar works', async () => {
        await page.searchFor("all\n");
        await page.takeScreenshot(`Screenshots/searchResults-${Date.now()}`);
        await page.searchFor("Dress\n");
        await page.takeScreenshot(`Screenshots/searchResults-${Date.now()}`);
        await page.searchFor("Shirt\n");
        await page.takeScreenshot(`Screenshots/searchResults-${Date.now()}`);
    });
    test('email input works as expected', async () => {
        await page.setInput(page.email, "thisisfake@hotmail.com\n");
        let emailErrorMSG = await page.driver.findElement(page.emailError).getText();
        expect(emailErrorMSG).toContain("Newsletter : This email address is already registered.");
        if(emailErrorMSG === "Newsletter : This email address is already registered."){
        console.log("email working as intended")}
        else{
        console.log("email is not working as intended")}
    });
});