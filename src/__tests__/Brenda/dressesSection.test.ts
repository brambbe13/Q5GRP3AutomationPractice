import { Builder, Capabilities, until, } from "selenium-webdriver";
const chromedriver = require("chromedriver")
import { myDressPage } from "./dressesSection";


const driver= new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();

const dressTest = new myDressPage (driver,"http://automationpractice.com/index.php");

//let summerDressCat = dressTest.driver.findElement(dressTest.summerDressCat)
//let size =dressTest.driver.findElement(dressTest.size)
//Test #1 Selecting filters
describe("Dresses Section", () => {
    beforeEach(async () =>{
        await dressTest.navigate()
        await dressTest.signIn();
        // expect("Josh").toBe(Truthy);
        });
        afterAll(async () => {
            await driver.quit();
        });
    //Test #1 Can use filters to find a specific item
    test('Can filter through dresses test',async() => {
        let dressesButton = dressTest.driver.findElement(dressTest.dressesButton)
        let searchName = await driver.findElement(dressTest.searchName).getText()

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
        //expect(searchName).toBe("demo model_05")
         
    
    
    
    });
    //Test #2 User can add multiple reviews on same item
    // test('Can add a review test', async () =>{
    //     let dressesButton = dressTest.driver.findElement(dressTest.dressesButton)
    //     await dressTest.driver.wait(until.elementLocated(dressTest.dressesButton))
    //     await dressesButton.click(); 
    //     await dressTest.getElement(dressTest.printedDress)
    //     await dressTest.click(dressTest.printedDress)
    //     await dressTest.writeReview("Loved it") && ("This dress fits perfectly! Will order again")
    //     expect().toBe()
    
    //  });

    //  test('Can add items to myWishlist lists', async () => { 
    //      let customerAccount = dressTest.driver.findElement(dressTest.customerAccount)
    //      let myWishlist =dressTest.driver.findElement(dressTest.myWishlist)
    //      let wishlistView =dressTest.driver.findElement(dressTest.wishlistView)
    //      let productName = await driver.findElement(dressTest.productName).getText()

    //     await dressTest.driver.wait(until.elementLocated(dressTest.dressesButton))
    //     await (await dressTest.driver.findElement(dressTest.dressesButton)).click();
    //     await dressTest.driver.sleep(1000)
    //     await dressTest.addItemToWishlist();
    //     await customerAccount.click();
    //     await dressTest.driver.sleep(1000)
    //     await myWishlist.click();
    //     await wishlistView.click();
    //     expect(productName).toBe(" Printed Dress ")


    
    //  });
    
    
 });

