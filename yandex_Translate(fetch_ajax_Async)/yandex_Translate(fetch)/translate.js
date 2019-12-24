class Translate{
    constructor(word,language){
        this.apikey = "trnsl.1.1.20191215T140458Z.1a20ee1ed77dc241.701c863d6dfb7ef8fb60a9d0ca3a21b03517a675";
        this.word = word;
        this.language = language;
    }
     translateWord(){
        let endpoint = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apikey}&text=${this.word}&lang=${this.language}`;
        
        return new Promise(function(resolve,reject){
            fetch(endpoint)
            .then(responce => responce.json())
            .then(data => resolve(data.text[0]))
            .catch(err => console.error(err));
        })
    }

    newTrans(newWord,newLangue){
        this.word = newWord;
        this.language = newLangue;
    }
}
