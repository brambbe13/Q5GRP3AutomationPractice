import { Builder, Capabilities, until, } from "selenium-webdriver";
const chromedriver = require("chromedriver")
import { myDressPage } from "./dressesSection";


const driver= new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();

const dressTest = new myDressPage (driver,"http://automationpractice.com/index.php");



describe("Dresses Section", () => {
    beforeEach(async () =>{
        await dressTest.navigate()
        await dressTest.signIn();
        
        });
        afterAll(async () => {
            await driver.quit();
        });
    
    
    test('Can add a review test', async () =>{
        /**This test is to see if user can write a review and be submitted
         */
        let dressesButton = dressTest.driver.findElement(dressTest.dressesButton)

        await dressTest.navigate();
        await dressTest.driver.wait(until.elementLocated(dressTest.dressesButton)) 
        await dressesButton.click();
        await dressTest.driver.sleep(1000)
        await dressTest.driver.wait(until.elementLocated(dressTest.chiffonDress))
        await (await dressTest.driver.findElement(dressTest.chiffonDress)).click();
        await dressTest.driver.sleep(3000)
        await dressTest.driver.wait(until.elementLocated(dressTest.writeReviewButton));
        await dressTest.driver.findElement(dressTest.writeReviewButton).click();
        await dressTest.driver.wait(until.elementLocated(dressTest.reviewTitle));
        await dressTest.driver.findElement(dressTest.reviewTitle).click();
        await dressTest.sendKeys(dressTest.reviewTitle,`${"Loved it"}\n`)
        await dressTest.driver.wait(until.elementLocated(dressTest.reviewComment));
        await dressTest.driver.findElement(dressTest.reviewComment).click();
        await dressTest.sendKeys(dressTest.reviewComment,`${"This dress fits perfectly! Will order again"}\n`)
        await dressTest.driver.wait(until.elementLocated(dressTest.reviewSend))
        await (await dressTest.driver.findElement(dressTest.reviewSend)).click();
        await dressTest.driver.sleep(5000)
        await dressTest.takeScreenshot(`src/__tests__/Brenda/Brenda.Screenshots/ReviewResults-${Date.now()}`);
    
     });

     
     
    
    
 });