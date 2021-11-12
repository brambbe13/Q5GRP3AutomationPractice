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
    
    test('Can filter through dresses test',async() => {
        /*
         This test clicks on selected category filters in the Dresses section.
         After they are selected a screenshot is taken of the results.
         */
        let dressesButton = dressTest.driver.findElement(dressTest.dressesButton)
    
        await dressTest.driver.wait(until.elementLocated(dressTest.dressesButton)) 
        await dressesButton.click();
        await dressTest.driver.sleep(1000)
        await dressTest.driver.wait(until.elementLocated(dressTest.summerDressCat));
        await dressTest.driver.findElement(dressTest.summerDressCat).click();
        await dressTest.driver.wait(until.elementLocated(dressTest.size));
        await dressTest.driver.findElement(dressTest.size).click();
        await dressTest.driver.wait(until.elementLocated(dressTest.blackColor));
        await dressTest.driver.findElement(dressTest.blackColor).click();
        await dressTest.driver.wait(until.elementLocated(dressTest.viscoseComp));
        await dressTest.driver.findElement(dressTest.viscoseComp).click();
        await dressTest.driver.wait(until.elementLocated(dressTest.casualStyle));
        await dressTest.driver.findElement(dressTest.casualStyle).click();
        await dressTest.driver.wait(until.elementLocated(dressTest.Maxi));
        await dressTest.driver.findElement(dressTest.Maxi).click();
        await dressTest.driver.sleep(1000)
        await dressTest.takeScreenshot(`src/__tests__/Brenda/Brenda.Screenshots/filterResults-${Date.now()}`);

    });
    
    
    
 });

