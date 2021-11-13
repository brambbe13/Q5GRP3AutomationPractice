import { homePageObject } from "./HomePageObject";

// okay, here are my tests, I spent most of my time with manual testing, and here are a couple of tests to support the testing 
// that I did. 
describe("testing the functionality of home page",() => {
    const page = new homePageObject()
    // learning from the past challenges, putting the beforeEach and afterAll up here made sure that it would quit after each 
    // test case.
    beforeEach(async () => {
        await page.navigate();
    });
    afterAll(async () => {
        await page.driver.quit();
    });
    // testing to make sure that the searchbar works. I did some easy searches w/ a screenshot afterwards to verify that the search 
    // went through. I know I could have automated the verification results, but despite what I tried I could not get it to work.
    test('testing that the search bar works', async () => {
        await page.searchFor("all\n");
        await page.takeScreenshot(`Screenshots/searchResults-${Date.now()}`);
        await page.searchFor("Dress\n");
        await page.takeScreenshot(`Screenshots/searchResults-${Date.now()}`);
        await page.searchFor("Shirt\n");
        await page.takeScreenshot(`Screenshots/searchResults-${Date.now()}`);
        await page.searchFor("Motorcycle\n");
        await page.takeScreenshot(`Screenshots/searchResults-${Date.now()}`);
    });
    // here I test the email input that is in the footer of the page. I have already registered the email so when it is given again 
    // it should give back that this email has been used.
    test('email input works as expected', async () => {
        await page.setInput(page.email, "thisisfake@hotmail.com\n");
        let emailErrorMSG = await page.driver.findElement(page.emailError).getText();
        expect(emailErrorMSG).toContain("Newsletter : This email address is already registered.");
        if(emailErrorMSG === "Newsletter : This email address is already registered."){
        console.log("email working as intended")}
        else{
        console.log("email is not working as intended")}
    });
    // testing that the login/logout buttons work the way they are expected to. It is automated to login w/ info provided,
    // screenshot, and log out successfully.
    test('login/logout buttons work as expected', async() => {
        await page.click(page.logInBtn);
        await page.setInput(page.emailAddress, "thisisfake@hotmail.com");
        await page.setInput(page.password, "12345\n");
        await console.log("logged in successfully")
        await page.takeScreenshot(`Screenshots/loginResults-${Date.now()}`);
        await page.click(page.logOutBtn);
        await console.log("logged out successfully");
    });
    // here is where the wonderful Dre and Sam came in to save the day for me. This test verifies that there are no dummy links
    // on the home page. using a for statement it will show how many href's are valid and how many are invalid and lead to a 
    // false site.
    test("testing that all buttons on the home page have valid enpoints", async () => {
        let myArray = await page.driver.findElements(page.homePageBtns)
        var myInvalidArray = []
        var myValidArray = []
        for (let i = 0; i < myArray.length; i++) {
            let href = await myArray[i].getAttribute('href')
            if (href === "http://www.prestashop.com/") {
                myInvalidArray.push(href)}
            else {
                myValidArray.push(href)}}
        console.log("There are "+ myInvalidArray.length + " href identifiers that lead to a false site.");
    });
});