import { pause, Step } from "../common utils/utils";
import Gradeselection from "../pageobjects/Gradeselection";

Step(/User should able to select any grade between 1 to 12/, async()=>{
await Gradeselection.clickaGrade();
await pause(2000);
expect(await browser.getUrl()).toEqual("https://school.m-tutor.com/home.php");
});