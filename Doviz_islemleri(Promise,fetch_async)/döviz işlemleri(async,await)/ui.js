class UI{
    constructor(firstCurrency,secondCurrency){
        this.firstCurrency = firstCurrency;
        this.secondCurrency = secondCurrency;
        
        this.outputFirst = document.getElementById("outputFirst");
        this.outputSecond = document.getElementById("outputSecond");
        this.outputResult = document.getElementById("outputResult");
    }

    displayEvents(e){
        this.outputResult.value = e;
    }
    newOutputFirst(){
        this.outputFirst.textContent = this.firstCurrency.options[this.firstCurrency.selectedIndex].textContent;
    }
    newOutputSecond(){
        this.outputSecond.textContent = this.secondCurrency.options[this.secondCurrency.selectedIndex].textContent;
    }
}