import { BasePage } from "../PageObjects/PageObjects";
import { By, until,  } from "selenium-webdriver";
import * as signInData from "./signInData.json"
const fs = require("fs");


export class myDressPage extends BasePage {
  constructor(driver, url,) {
    super(driver, url)
    
  }
  
  LoginButton: By = By.className("login") //$$('a[class="login"]')
  usernameField: By =By.css("[id='email']") //$$('input[id="email"]')
  passwordField: By= By.css("[id='passwd']") //$$('input[id="passwd"]')
  SignInEmailButton: By =By.css("[id='SubmitLogin']") //$$('[id="SubmitLogin"]')
  //Filter selectors
  searchInput: By= By.className("search_query form-control ac_input") //$$('input[class="search_query form-control ac_input"]')
  searchButton: By = By.css("button[name='submit_search']") //$$('button[name="submit_search"]')
  dressesButton: By =By.xpath('(//a[@title="Dresses"])[2]') 
  summerDressCat: By =By.css("[id='uniform-layered_category_11']") //$$('input[id="layered_category_11"]')
  size: By = By.css("input[value='3_1']") //$$('input[value="3_1"]')
  blackColor: By = By.css("input[rel='11_3']") //$$('input[rel="11_3"]')
  viscoseComp: By = By.css("input[value='3_5']") //$$('input[value="3_5"]')
  casualStyle: By = By.css("input[value='11_6']") //$$('input[value="11_6"]')
  Maxi: By =By.css("input[value='21_7']") //$$('input[value="21_7"]')
  filterResults: By =By.xpath('//ul[@class="product_list grid row"]//img[@src="http://automationpractice.com/img/loader.gif"]')
  searchName: By =By.css("//h1[@class= 'page-heading  product-listing']//span[@class='lighter']") //$$('[class="lighter"]')
  //MultipleReviews
  //printedDressContainer: By =By.css("[class='product-container']")
  //printedDressMore: By =By.css("a[itemprop='url'][5]") //$$('a[itemprop="url"]')[5]
  chiffonDress: By =By.xpath('(//a[@title="Printed Chiffon Dress"])[1]') //$x('//a[@title="Printed Chiffon Dress"]')[1]
  printedDress: By =By.css('[title="Printed Dress"][5]') //$$('[title="Printed Dress"]')[5]
  writeReviewButton: By = By.xpath('//a[@class="open-comment-form"]') //$x('//a[@class="open-comment-form"]')
  reviewTitle: By = By.id("comment_title") //$$('input[id="comment_title"]')
  reviewComment: By =By.css("textarea[id='content']") //$$('textarea[id="content"]')
  reviewSend: By = By.css("button[id='submitNewMessage']") //$$('button[id="submitNewMessage"]')
  //Wishlist
  listView: By = By.css('i[class="icon-th-list"]') //$$('i[class="icon-th-list"]')
  customerAccount: By =By.css('a[title="View my customer account"]') //$$('a[title="View my customer account"]')
  myWishlist: By = By.css("a[title='My wishlists']") //$$('a[title="My wishlists"]')
  wishlistNameInput: By =By.className("inputTxt form-control") //$$('input[class="inputTxt form-control"]')
  wishlistSave: By = By.id("submitWishlist") //$$('button[id="submitWishlist"]')
  addToWishlist: By =By.css("[class='addToWishlist wishlistProd_4']") //$$('[class="addToWishlist wishlistProd_4"]')
  wishlistName: By =By.css("id='wishlist_41125'") //$$('[id="wishlist_41125"]')
  closeConfirmMessg: By =By.css('a[class="fancybox-item fancybox-close"]') //$$('a[class="fancybox-item fancybox-close"]')
  wishlistView: By =By.xpath('(//a[@onclick])[1]') //$$('a[onclick]')[1] working
  productName: By =By.id('s_title')
  

    //navigating to the url
    async navigate() {
    await this.driver.get(this.url);
    };
    //sign in
    async signIn(): Promise<void> {
      await this.driver.wait(until.elementLocated(this.LoginButton));
      await this.driver.findElement(this.LoginButton).click();
      await this.driver.findElement(this.usernameField).sendKeys(signInData.username);
      await this.driver.sleep(1000)
      await (await this.driver.findElement(this.passwordField)).sendKeys(signInData.password);
      await (await this.driver.findElement(this.SignInEmailButton)).click();
      return await this.driver.wait(until.elementLocated(this.customerAccount)).click();
    };
    
    async Filters(){
      await this.driver.wait(until.elementLocated(this.summerDressCat));
      await this.driver.findElement(this.summerDressCat).click();
      await this.driver.wait(until.elementLocated(this.size));
      await this.driver.findElement(this.size).click();
      await this.driver.wait(until.elementLocated(this.blackColor));
      await this.driver.findElement(this.blackColor).click();
      await this.driver.wait(until.elementLocated(this.viscoseComp));
      await this.driver.findElement(this.viscoseComp).click();
      await this.driver.wait(until.elementLocated(this.casualStyle));
      await this.driver.findElement(this.casualStyle).click();
      await this.driver.wait(until.elementLocated(this.Maxi));
      await this.driver.findElement(this.Maxi).click();
    };
    async takeScreenshot(filepath: string) {
      fs.writeFile(
        `${filepath}.png`,
        await this.driver.takeScreenshot(),
        "base64",
        (e) => {
          if (e) console.log(e);
          else console.log("screenshot saved successfully");
        }
      );
    };
    
    async sendKeys(elementBy: By, keys ) {
      await this.driver.wait(until.elementLocated(elementBy));
      return this.driver.findElement(elementBy).sendKeys(keys);
    
    };
    async findElement(elementBy: By, keys){
      await this.driver.wait(until.elementLocated(elementBy));
      await this.driver.findElement(elementBy).click();

    };
    async getText(elementBy: By){
      await this.driver.wait(until.elementLocated(this.reviewTitle));
      return (await this.driver.findElement(elementBy)).getText();
    };
    
    

}
    

  



 
