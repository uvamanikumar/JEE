import { pause, Step } from "../common utils/utils";
import VideoPage from "../pageobjects/VideoPage";

Step(/^Select a subject from home page \"([^\"]*)\"$/,async(SubjectName)=>{
    await VideoPage.clickSubjct;
    await pause(2000);
});
    