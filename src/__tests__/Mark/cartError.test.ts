import { Builder, Capabilities } from "selenium-webdriver";
import { myPage } from "./myPage";

const driver = new Builder().withCapabilities(Capabilities.firefox()).build()

//This Test File Tests The Add To Cart Error Message.

//Test Case URL: https://dmutah.atlassian.net/browse/PT5G3-23
test("Cart Page Functionality w/o Checking The Terms Of Service Box", async () => {
    const myTest = new myPage(driver, "http://automationpractice.com/index.php?id_product=7&controller=product")
    await myTest.navigate()
    await myTest.getElement(myTest.AddToCart)
    await myTest.click(myTest.AddToCart)
    expect(await myTest.getText(myTest.ProductAdded)).toContain("Product successfully added")
    await myTest.getElement(myTest.Checkout)
    await myTest.click(myTest.Checkout)
    await myTest.getElement(myTest.Checkout1)
    await myTest.click(myTest.Checkout1)
    await myTest.getElement(myTest.EmailField)
    await myTest.setInput(myTest.EmailField, "markr@gmail.com")
    await myTest.getElement(myTest.PassField)
    await myTest.setInput(myTest.PassField, "Marito241")
    await myTest.getElement(myTest.SignIn1)
    await myTest.click(myTest.SignIn1)
    await myTest.getElement(myTest.Checkout2)
    await myTest.click(myTest.Checkout2)
    await myTest.getElement(myTest.Checkout3)
    await myTest.click(myTest.Checkout3)
    expect(await myTest.getText(myTest.ServiceError)).toContain("You must agree to the terms")
    await myTest.takeScreenshot(`${__dirname}/Screenshots/TermsOfServiceError`)
    await driver.sleep(5000)
    await driver.quit()
})