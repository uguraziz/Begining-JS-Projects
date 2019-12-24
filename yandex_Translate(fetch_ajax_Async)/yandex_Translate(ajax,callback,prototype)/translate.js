function Translate(word,language){
    this.apikey = "trnsl.1.1.20191215T140458Z.1a20ee1ed77dc241.701c863d6dfb7ef8fb60a9d0ca3a21b03517a675";
    this.word = word;
    this.language = language;

    //xhr objesi
    this.xhr = new XMLHttpRequest();
}

Translate.prototype.translateWord = function(callback){
    //ajax işlemleri
    let endpoint = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apikey}&text=${this.word}&lang=${this.language}`;
    this.xhr.open("GET",endpoint);

    this.xhr.onload = () => {
        if(this.xhr.status === 200){
            let text = JSON.parse(this.xhr.responseText).text[0];
            callback(null,text);
        }else{
            callback("bir hata oluştu", null);
        }
    }
    this.xhr.send();
}

Translate.prototype.changeParameters = function(newWord,newLanguage){
    this.word = newWord;
    this.language = newLanguage;
}