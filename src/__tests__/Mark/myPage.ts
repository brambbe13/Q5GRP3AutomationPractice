import { By } from "selenium-webdriver";
import { BasePage } from "../PageObjects/PageObjects";

const fs = require("fs")

export class myPage extends BasePage {

  SignIn: By = By.className("login")
  EmailField: By = By.id("email")
  PassField: By = By.id("passwd")
  SignIn1: By = By.className("icon-lock left")
  Results: By = By.className("info-account")
  SignOut: By = By.className("logout")
  ErrorResults: By = By.xpath("//ol/li")
  AddToCart: By = By.xpath("//span[text()='Add to cart']")
  ProductAdded: By = By.className("layer_cart_product col-xs-12 col-md-6")
  Checkout: By = By.css("a[title='Proceed to checkout']")
  Checkout1: By = By.className("button btn btn-default standard-checkout button-medium")
  Checkout2: By = By.css("button[name='processAddress']")
  TermsBox: By = By.id("uniform-cgv")
  Checkout3: By = By.css("button[name='processCarrier']")
  BankWire: By = By.className("bankwire")
  ConfirmOrder: By = By.css('button[class="button btn btn-default button-medium"]')
  ConfrimationText: By = By.className("cheque-indent")
  ServiceError: By = By.className("fancybox-error")

  constructor(driver, url) {
    super(driver, url)
  }

  async takeScreenshot(filepath: string) {
    fs.writeFile(
      `${filepath}.png`,
      await this.driver.takeScreenshot(),
      "base64",
      (e) => {
        if (e) console.log(e);
        else console.log("Screenshot Saved Successfully");
      }
    )
  }
}
