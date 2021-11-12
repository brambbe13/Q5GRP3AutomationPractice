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
    
    
     test("Can Create New Wishlist", async ()=>{
         /** thi test focuses on the user's ability to create a new
          * wishlist under their account
          */
        await dressTest.navigate();
        await dressTest.driver.wait(until.elementLocated(dressTest.customerAccount))
        await (await dressTest.driver.findElement(dressTest.customerAccount)).click();
        await dressTest.driver.sleep(1000)
        await dressTest.driver.wait(until.elementLocated(dressTest.myWishlist))
        await (await dressTest.driver.findElement(dressTest.myWishlist)).click();
        await dressTest.driver.wait(until.elementLocated(dressTest.wishlistNameInput));
        await dressTest.driver.findElement(dressTest.wishlistNameInput).click();
        await dressTest.sendKeys(dressTest.wishlistNameInput,`${"Graduation"}\n`);
        await dressTest.driver.wait(until.elementLocated(dressTest.wishlistSave));
        await dressTest.driver.findElement(dressTest.wishlistSave).click();
        await dressTest.driver.sleep(3000)
        await dressTest.takeScreenshot(`src/__tests__/Brenda/Brenda.Screenshots/wishListCreationResults-${Date.now()}`);

     })
    
    
 });

