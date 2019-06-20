package stepdefinition;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class LoginStep {

    WebDriver driver;

    @Given("^I am on http://the-internet\\.herokuapp\\.com/$")
    public void i_am_on_http_the_internet_herokuapp_com() {

        System.setProperty("webdriver.chrome.driver", "C:\\mayProject\\May_Jat_Project-6e1f3c3061327d8a8324efc5130feb9311bf632e\\Drivers\\chromedriver.exe");
        driver = new ChromeDriver();
        driver.get("https://the-internet.herokuapp.com/login");
        driver.manage().window().maximize();

    }

   /* @When("^I click on form authentication on Menu list$")
    public void i_click_on_form_authentication_on_Menu_list()  {

        driver.findElement(By.xpath("//*[@id=\"content\"]/ul/li[21]/a")).click();

    }
*/
    @Then("^I should be taken to a login page$")
    public void i_should_be_taken_to_a_login_page()  {

        System.out.println("User is taken to login page");

    }


    @When("^I enter \"([^\"]*)\" as username and \"([^\"]*)\" as password$")
    public void i_enter_as_username_and_as_password(String arg1, String arg2) {

        driver.findElement(By.id("username")).sendKeys(arg1);
        driver.findElement(By.id("password")).sendKeys(arg2);

    }


    @When("^I click on login validation button$")
    public void i_click_on_login_validation_button()  {

        driver.findElement(By.xpath("//*[@id=\"login\"]/button/i")).click();

    }

    @Then("^The page should display Your username is invalid!$")
    public void the_page_should_display_Your_username_is_invalid()  {
        System.out.println("User is not taken to login page");

    }


    @When("^I enter Username as \"([^\"]*)\" and Password \"([^\"]*)\"$")
    public void i_enter_Username_as_and_Password(String arg1, String arg2)  {
        driver.findElement(By.id("username")).sendKeys(arg1);
        driver.findElement(By.id("password")).sendKeys(arg2);

    }

    @When("^I click login validation button$")
    public void i_click_login_validation_button()  {
        driver.findElement(By.xpath("//*[@id=\"login\"]/button/i")).click();

    }

    @Then("^The page should display Your password is invalid!$")
    public void the_page_should_display_Your_password_is_invalid()  {
        System.out.println("User is not taken to login page");

    }


    @When("^I enter Username as \"([^\"]*)\" and Password as \"([^\"]*)\"$")
    public void i_enter_Username_as_and_Password_as(String arg1, String arg2)  {
        driver.findElement(By.id("username")).sendKeys(arg1);
        driver.findElement(By.id("password")).sendKeys(arg2);

    }

    @Then("^I should be logged in successfully$")
    public void i_should_be_logged_in_successfully()  {
        System.out.println("User is taken to login to secure page");

    }

    @When("^I click on infinite scroll on menu$")
    public void i_click_on_infinite_scroll_on_menu()  {

        driver.get("http://the-internet.herokuapp.com/infinite_scroll");
        //driver.get("https://www.youtube.com/watch?v=DeNjIFAaqRc");
        //((JavascriptExecutor)driver).executeScript("scroll(0,2000)");


    }

    @When("^I scroll to the bottom page twice$")
    public void i_scroll_to_the_bottom_page_twice()  {

        //driver = new ChromeDriver();
        //JavascriptExecutor jse = (JavascriptExecutor)driver;
        //jse.executeScript("scrollBy(0,2500)");
        ((JavascriptExecutor)driver).executeScript("scroll(0,2000)");

    }

    @When("^I scroll back to the top of the page$")
    public void i_scroll_back_to_the_top_of_the_page() {

    }

    @Then("^I should be able to verify the infinite scroll text$")
    public void i_should_be_able_to_verify_the_infinite_scroll_text() {

    }

    @When("^I click on key press on menu$")
    public void i_click_on_key_press_on_menu()  {
        System.setProperty("webdriver.chrome.driver", "C:\\mayProject\\May_Jat_Project-6e1f3c3061327d8a8324efc5130feb9311bf632e\\Drivers\\chromedriver.exe");
        driver = new ChromeDriver();
        driver.get("http://the-internet.herokuapp.com/key_presses");


    }

    @And("^I click (\\d+) key$")
    public void iClickKey(int arg0)  {
        driver.findElement(By.id("target")).sendKeys("argl");

    }

    @Then("^I should be able to verify test displayed after every key press$")
    public void i_should_be_able_to_verify_test_displayed_after_every_key_press()  {
        System.out.println("User  seeing text displayed after every each key press");

    }



}





