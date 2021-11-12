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

     test('Can add items to myWishlist lists', async () => { 
         /** This test focuses on whether an user can add an item to their wishlist account
          */
        await dressTest.navigate();
        await dressTest.driver.wait(until.elementLocated(dressTest.dressesButton))
        await (await dressTest.driver.findElement(dressTest.dressesButton)).click();
        await dressTest.driver.wait(until.elementLocated(dressTest.listView))
        await (await dressTest.driver.findElement(dressTest.listView)).click();
        await dressTest.driver.sleep(1000)
        await dressTest.driver.wait(until.elementLocated(dressTest.addToWishlist))
        await (await dressTest.driver.findElement(dressTest.addToWishlist)).click();
        await dressTest.driver.sleep(1000)
        await dressTest.driver.wait(until.elementLocated(dressTest.closeConfirmMessg))
        await (await dressTest.driver.findElement(dressTest.closeConfirmMessg)).click();
        await dressTest.driver.sleep(1000)
        await dressTest.driver.wait(until.elementLocated(dressTest.customerAccount))
        await (await dressTest.driver.findElement(dressTest.customerAccount)).click();
        await dressTest.driver.sleep(1000)
        await dressTest.driver.wait(until.elementLocated(dressTest.myWishlist))
        await (await dressTest.driver.findElement(dressTest.myWishlist)).click();
        await dressTest.driver.sleep(1000)
        await dressTest.driver.wait(until.elementLocated(dressTest.wishlistView))
        await (await dressTest.driver.findElement(dressTest.wishlistView)).click();
        await dressTest.driver.sleep(3000)
        await dressTest.takeScreenshot(`src/__tests__/Brenda/Brenda.Screenshots/wishListResults-${Date.now()}`);
     });
    
    
    
 });

