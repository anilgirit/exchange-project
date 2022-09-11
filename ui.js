class UI {
    constructor (firstSelect, secondSelect){
        this.firstSelect = firstSelect;
        this.secondSelect = secondSelect;

        this.outputFirst = document.querySelector("#outputFirst");
        this.outputSecond = document.querySelector("#outputSecond");
        this.outputResult = document.querySelector("#outputResult");
    }
    changeFirst(){
        this.outputFirst.textContent = this.firstSelect.options[this.firstSelect.selectedIndex].textContent;
    }
    changeSecond (){
        this.outputSecond.textContent = this.secondSelect.options[this.secondSelect.selectedIndex].textContent;
    }
    displayResult(result){
        this.outputResult.value = result;
    }
}