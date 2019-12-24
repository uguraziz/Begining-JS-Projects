//Prototype, Ajax, Callback

const form = document.querySelector("#translate-form");
const selectList = document.querySelector("#language");

eventListeners();
function eventListeners(){
    form.addEventListener("submit", transtlateWord);
    //change 
    selectList.onchange = function(){
        //arayüz işlemleri
        ui.changeUI();
    }
}

//change 
selectList.onchange = function(){
    //arayüz işlemleri
    ui.changeUI();
}

let word = document.getElementById("word").value;
let language = document.getElementById("language").value;

const translate = new Translate(word,language);
const ui = new UI();

function transtlateWord(e){

    let word = document.getElementById("word").value;
    let language = document.getElementById("language").value;

    translate.changeParameters(word, language);
    translate.translateWord(function(err,responce){
        if(err){
            //hata yazdır
            console.log(err);
        }else{
            ui.displayTranslate(responce);
        }
    });

    e.preventDefault();
}