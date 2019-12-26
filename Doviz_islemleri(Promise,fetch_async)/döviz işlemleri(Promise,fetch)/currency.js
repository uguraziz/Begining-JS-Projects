class Currency{
    constructor(firstCurrency,secondCurrency){
        this.firstCurrency = firstCurrency;
        this.secondCurrency = secondCurrency;
        this.url = `https://api.exchangeratesapi.io/latest?base=`;
        this.amount = null;
    }

    exchange(){
        return new Promise((resolve,reject) => {
            fetch(this.url + this.firstCurrency)
            .then(responce => responce.json())
            .then(data => {
                let parity = data.rates[this.secondCurrency];
                let total = parity * this.amount;
                resolve(total);
            })
            .catch(err => reject(err));
        })
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