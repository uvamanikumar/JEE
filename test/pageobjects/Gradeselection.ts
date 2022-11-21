class Gradeselection{
    private get selectgrade(){
        return $("(//div[@class='sel-box equal-height grade_select_btn'])[4]")
    }
    async clickaGrade(){
        await (this.selectgrade).click();    }
}
export default new Gradeselection();