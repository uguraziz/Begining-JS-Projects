const form = document.querySelector("#film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardBody = document.querySelectorAll(".card-body")[1];
const clear = document.querySelector("#clear-films");

//Tüm eventleri yükleme
eventListeners();

function eventListeners() {
    form.addEventListener("submit", addFilm);
    document.addEventListener("DOMContentLoaded", function () {
        let films = storage.getFilmsFromStorage();
        films.forEach(function (e) {
            ui.addFilmToUI(e);
        })
    })
    cardBody.addEventListener("click", deleteFilm);
    clear.addEventListener("click", clearAllFilms);
}

function addFilm(e) {
    let title = titleElement.value.trim();
    let director = directorElement.value.trim();
    let url = urlElement.value.trim();
    control = false;
    let films = storage.getFilmsFromStorage();

    films.forEach(function(x){
        if(x.title === title || x.director === director || x.url === url){
            control = true;
        }
    })

    if (title === "" || director === "" || url === "") {
        ui.displayMessages("danger", "Boş alan bırakmayınız");
    }
    else if (control === true){
        ui.displayMessages("danger", "Bu film daha önce yüklenmiştir.");
    }
    else {
        // Yeni film
        let newFilm = new Film(title, director, url);

        ui.addFilmToUI(newFilm); // arayüze film ekleme fonksiyonu
        storage.addFilmToStorage(newFilm); // Storage'a film ekleme
        ui.displayMessages("success", "Ekleme işlemi başarılı");
    }
    ui.clearInputs(titleElement, directorElement, urlElement);
    e.preventDefault();
}

function deleteFilm(e) {
    if (e.target.id === "delete-film") {
        ui.deleteFilmFromUI(e.target);
        storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        ui.displayMessages("success", "Silme işlemi başarı ile gerçekleşti");
    }
}

function clearAllFilms(e) {
    let films = storage.getFilmsFromStorage();
    control = false;
    films.forEach(function(x){
       if(x.title != ""){
           control = true;
       }
    })
    if(control == true){
    if (confirm("Tüm Filmler Silinecek Onaylıyor musunuz?")) {
        ui.clearAllFilmsFormUI();
        storage.clearAllFilmsFromStorage();
        }
    }else{
        alert("Listenizde silinecek film Bulunamamıştır!");
    }
}