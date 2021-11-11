import { BasePage } from "./BasePageObject";
import {
    Builder,
    By,
    Capabilities,
    until,
    WebDriver,
} from "selenium-webdriver";
const fs = require("fs");
const chromedriver = require("chromedriver");
const geckodriver = require("geckodriver");

// here is page object for the home page

export class homePageObject extends BasePage {
    searchBox: By = By.className("search_query form-control ac_input");
    itemImage: By = By.className("item-img");
    searchList: By = By.xpath('//ul[@class="product_list grid row"]//li[contains("ajax")');
    email: By = By.className("inputNew form-control grey newsletter-input")
    emailError: By = By.xpath('//p[@class="alert alert-danger"]');
    homePageBtns: By = By.xpath('//a')
    constructor(driver?: WebDriver) {
        super(driver, "http://automationpractice.com/index.php")
        if (driver) this.driver = driver;
        else
          this.driver = new Builder()
            .withCapabilities(Capabilities.chrome())
            .build();
      }
    async searchFor(searchText: string) {
        await this.setInput(this.searchBox, searchText);
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
    // async getList() {
    //   const searchList: Array<string> = [];
    //   let list = await this.driver.findElements(this.searchList);
    //   for (let i = 0; i < list.length; i++) {
    //     await searchList.push(await list[i].getText());
    //   }
    // };
}