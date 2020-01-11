class ui{
static addFilmToUI(e){
    const filmList = document.querySelector("#films");
    filmList.innerHTML += `
    <tr>
        <td><img src="${e.url}" class="img-fluid img-thumbnail"></td>
        <td>${e.title}</td>
        <td>${e.director}</td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
    </tr>`;
}
static clearInputs(element1,element2,element3){
    element1.value = "";
    element2.value = "";
    element3.value = "";
}

static displayMessages(type,message){
    let cardBody = document.querySelectorAll(".card-body")[0];

    let msj = document.createElement("div");
    msj.className = `alert alert-${type}`;
    msj.textContent = message;
    cardBody.appendChild(msj);
    setTimeout(() => {
        msj.remove();
    }, 1e3);
}

static deleteFilmFromUI(e){
    e.parentElement.parentElement.remove();
    e.parentElement.parentElement.textContent;
}

static clearAllFilmsFormUI(){
    let cardBody = document.querySelector("#films");

    while(cardBody.firstElementChild != null){
        cardBody.firstElementChild.remove();
        }
    }
}

