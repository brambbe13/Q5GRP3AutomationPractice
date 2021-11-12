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

