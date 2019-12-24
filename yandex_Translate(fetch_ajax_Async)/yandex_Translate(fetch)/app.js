const submit = document.getElementById("translate-form");
const word = document.getElementById("word");
const langue = document.getElementById("language");
const translate = new Translate(word.value,langue.value);
const ui = new UI();

eventListeners();
function eventListeners(){
    submit.addEventListener("submit", translateLangue);
    langue.onchange = function(){
        ui.changeUI();
    }
}

function translateLangue(e){
    translate.newTrans(word.value,langue.value);
    translate.translateWord()
    .then(responce => ui.displayUI(responce))
    .catch(err => console.error(err));
    e.preventDefault();
}
