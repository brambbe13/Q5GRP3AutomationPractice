import { BasePage } from "./BasePageObject";
import {
    Builder,
    By,
    Capabilities,
    WebDriver,
} from "selenium-webdriver";
const fs = require("fs");

// here is page object for the home page

export class homePageObject extends BasePage {
    searchBox: By = By.className("search_query form-control ac_input");
    itemImage: By = By.className("item-img");
    searchList: By = By.xpath('//ul[@class="product_list grid row"]//li');
    email: By = By.className("inputNew form-control grey newsletter-input")
    emailError: By = By.xpath('//p[@class="alert alert-danger"]');
    logInBtn: By = By.className("login");
    emailAddress: By = By.id("email");
    password: By = By.id("passwd");
    logOutBtn: By = By.className("logout");
    homePageBtns: By = By.xpath('//a[@href]')
    constructor(driver?: WebDriver) {
        super(driver, "http://automationpractice.com/index.php")
        if (driver) this.driver = driver;
        else
          this.driver = new Builder()
            .withCapabilities(Capabilities.chrome())
            .build();
      }
    /**
     * Will search for text given in the searchBox
     * @param {string} search - will search for the string given if followed by \n
     * @example
     * await page.searchFor("Dress\n");
     */
    async searchFor(searchText: string) {
        await this.setInput(this.searchBox, searchText);
    };
    /**
     * Will take a screenshot and save it to the filepath/filename provided.
     * Automatically saves as a .png file.
     * @param {string} filepath - the filepath relative to the project's base folder where you want the screenshot saved
     * @example
     * page.takeScreenshot("myFolder/mypic")
     * //picture saves in "myFolder" as "mypic.png"
     */
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
  };