const amount = document.getElementById("amount");
const firstCurrency = document.getElementById("firstCurrency");
const secondCurrency = document.getElementById("secondCurrency");
const currency = new Currency("USD","TRY");
const ui = new UI(firstCurrency,secondCurrency);

eventlisteners();
function eventlisteners(){
    amount.addEventListener("input", amountList);
    firstCurrency.onchange = function(){
        currency.newFirstCurrency(firstCurrency.options[firstCurrency.selectedIndex].textContent);
        ui.newOutputFirst();
    }
    secondCurrency.onchange = function(){
        currency.newSecondCurrency(secondCurrency.options[secondCurrency.selectedIndex].textContent);
        ui.newOutputSecond();
    }
}

function amountList(){
    currency.exchangeNewAmount(amount.value);
    currency.exchange()
    .then(responce => {
        ui.displayEvents(responce);
    })
    .catch(err => console.error(err));
}