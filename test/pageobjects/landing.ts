class LandingPage {
    private get SigninBtn(){
        return  $("//*[@id='navbar']/ul/li[1]/a");
    } 

    async clickSigninBtn(){
        await (this.SigninBtn).click();    }
}
export default new LandingPage();