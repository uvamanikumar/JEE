import { clickElement, launchPage, pause, Step } from "../common utils/utils";
import loginPage from "../pageobjects/login page";

Step(/launch the url (.*)/, async url => {
    await launchPage(url);
    await pause(5000);
});

Step(/^User should see respective popup message \"([^\"]*)\"$/, async(popup) => {
expect(await loginPage.getpopupmsg()).toEqual(popup)
});
// Step(/The popup should display the following message (.*)/, async(msg) => {
//         expect(await loginPage.getpopupmsg()).toEqual(msg)
// });
Step(/^User login to the application using invalid credentials \"([^\"]*)\" \"([^\"]*)\"$/, async(mobile,pwd) =>{
    await loginPage.mobilenumber.setValue(mobile);
    await loginPage.password.setValue(pwd);
    await clickElement(loginPage.loginbtn)
    await pause(5000);
});
Step(/^User should see respective error message \"([^\"]*)\"$/, async(errmsg)=>{
let errormsg=await loginPage.getMobFieldErr()+" "+await loginPage.getPwdFieldErr();
expect(errormsg.trim()).toEqual(errmsg)
});
Step(/User login to the application using valid credentials (.*) (.*)/, async (mob,pwd) =>{
    await loginPage.mobilenumber.setValue(mob);
    await loginPage.password.setValue(pwd);
    await clickElement(loginPage.loginbtn)
    await pause(2000);
});
Step(/User should navigate to Grade selection page (.*)/, async(url)=>{
    try{
        await loginPage.clickok();
        await pause(2000);
    }
    catch{
        console.log("session not exist");
    }
expect(await browser.getUrl()).toEqual(url)
});
