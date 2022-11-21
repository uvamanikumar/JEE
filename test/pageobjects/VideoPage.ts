class videopage {
    private get Selectsubject(){
        return  $("(//h6[@class='subject-tit'])[2]");
    } 
    private get video(){
        return $("//div[@class='video-overlay']");
    }

    async clickSubjct(){
        await (this.Selectsubject).click();    }
    async clickVideo(){
        await(await (this.video)).click();
    }
}
export default new videopage();