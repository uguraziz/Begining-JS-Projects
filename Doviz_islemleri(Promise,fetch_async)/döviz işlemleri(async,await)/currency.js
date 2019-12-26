class Currency{
    constructor(firstCurrency,secondCurrency){
        this.firstCurrency = firstCurrency;
        this.secondCurrency = secondCurrency;
        this.url = `https://api.exchangeratesapi.io/latest?base=`;
        this.amount = null;
    }

    async exchange(){
       let responce = await fetch(this.url + this.firstCurrency);
       let data2 = await responce.json();
       let data = data2.rates[this.secondCurrency];
       let total = data * this.amount;
       return total;
    }

    exchangeNewAmount(newAmount){
        this.amount = newAmount;
    }

    newFirstCurrency(newCurrency) {
        this.firstCurrency = newCurrency;
    }

    newSecondCurrency(newCurrency){
        this.secondCurrency = newCurrency;
    }
}
