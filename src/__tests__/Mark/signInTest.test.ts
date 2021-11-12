import { Builder, Capabilities } from "selenium-webdriver";
import { myPage } from "./myPage";

const driver = new Builder().withCapabilities(Capabilities.firefox()).build()

//This Test File Tests The Sign-In Page.

//Test Case URL: https://dmutah.atlassian.net/browse/PT5G3-5
test("Navigating To Sign-In Page & Sign In/Out Successfully", async () => {
    const myTest = new myPage(driver, "http://automationpractice.com/index.php")
    await myTest.navigate()
    await myTest.getElement(myTest.SignIn)
    await myTest.click(myTest.SignIn)
    await myTest.getElement(myTest.EmailField)
    await myTest.setInput(myTest.EmailField, "markr@gmail.com")
    await myTest.getElement(myTest.PassField)
    await myTest.setInput(myTest.PassField, "Marito241")
    await myTest.getElement(myTest.SignIn1)
    await myTest.click(myTest.SignIn1)
    expect(await myTest.getText(myTest.Results)).toContain("Welcome to your account.")
    await myTest.takeScreenshot(`${__dirname}/Screenshots/SignedInSuccessfully`)
    await driver.sleep(5000)
    await myTest.getElement(myTest.SignOut)
    await myTest.click(myTest.SignOut)
})

describe("Sign-In Scenrio's", async () => {
    const myTest = new myPage(driver, "http://automationpractice.com/index.php?controller=authentication&back=my-account")

    //Test Case URL: https://dmutah.atlassian.net/browse/PT5G3-6 
    test("Sign In w/An Unregistered Email", async () => {
        await myTest.navigate()
        await myTest.getElement(myTest.EmailField)
        await myTest.setInput(myTest.EmailField, "mark@gmail.com")
        await myTest.getElement(myTest.PassField)
        await myTest.setInput(myTest.PassField, "Marito241")
        await myTest.getElement(myTest.SignIn1)
        await myTest.click(myTest.SignIn1)
        expect(await myTest.getText(myTest.ErrorResults)).toContain("Authentication failed.")
    })

    //Test Case URL: https://dmutah.atlassian.net/browse/PT5G3-7
    test("Sign In w/An Incorrect Password", async () => {
        await myTest.navigate()
        await myTest.getElement(myTest.EmailField)
        await myTest.setInput(myTest.EmailField, "markr@gmail.com")
        await myTest.getElement(myTest.PassField)
        await myTest.setInput(myTest.PassField, "Marito")
        await myTest.getElement(myTest.SignIn1)
        await myTest.click(myTest.SignIn1)
        expect(await myTest.getText(myTest.ErrorResults)).toContain("Authentication failed.")
    })

    //Test Case URL: https://dmutah.atlassian.net/browse/PT5G3-9
    test("Sign In w/Blank Email Field", async () => {
        await myTest.navigate()
        await myTest.getElement(myTest.PassField)
        await myTest.setInput(myTest.PassField, "Marito241")
        await myTest.getElement(myTest.SignIn1)
        await myTest.click(myTest.SignIn1)
        expect(await myTest.getText(myTest.ErrorResults)).toContain("email address required")
    })

    //Test Case URL: https://dmutah.atlassian.net/browse/PT5G3-10 
    test("Sign In w/Blank Password Field", async () => {
        await myTest.navigate()
        await myTest.getElement(myTest.EmailField)
        await myTest.setInput(myTest.EmailField, "markr@gmail.com")
        await myTest.getElement(myTest.SignIn1)
        await myTest.click(myTest.SignIn1)
        expect(await myTest.getText(myTest.ErrorResults)).toContain("Password is required")
        await driver.quit()
    })
})