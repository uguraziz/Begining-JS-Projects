class Translate{
    constructor(word,language){
        this.apikey = "trnsl.1.1.20191215T140458Z.1a20ee1ed77dc241.701c863d6dfb7ef8fb60a9d0ca3a21b03517a675";
        this.word = word;
        this.language = language;
    }
     async translateWord(){
        let endpoint = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apikey}&text=${this.word}&lang=${this.language}`;
        
        const responce = await fetch(endpoint);
        const data2 = await responce.json();
        const data = await data2.text[0];
        return data;
    }

    newTrans(newWord,newLangue){
        this.word = newWord;
        this.language = newLangue;
    }
}
