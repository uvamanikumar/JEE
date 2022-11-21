class loginPage {
    public get mobilenumber() {
        return $("//input[@id='mobile_no']");
    }
    public get password() {
        return $("//input[@id='password']");
    }
    public get loginbtn() {
        return $("//button[@class='btn btn-danger btn-block p-3 login-submit']");
    }
    private get popupMsg(){
        return $("//p[@id='modal-body']")
    }
    private get mobFielderr(){
        return $("//div[@class='text-danger pl-2']")
    }
    private get pwdFielderr(){
        return $("//div[@class='text-danger pl-0']")
    }
    private get popupOkay(){
        return $("(//button[@class='cmn-btn small-btn wid-len-btn'])[1]")
    }

    async clickok(){
        await (await this.popupOkay).click();
    }



    async getpopupmsg(){
        console.log("popupmsg"+(await this.popupMsg).getText())
        return (await this.popupMsg).getText();
    }
    async getMobFieldErr(){
        return(await this.mobFielderr).getText();
    }
    async getPwdFieldErr(){
        return(await this.pwdFielderr).getText();
    }

}
export default new loginPage();