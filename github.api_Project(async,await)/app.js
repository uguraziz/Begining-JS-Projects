const submit = document.getElementById("github-form");
const githubname = document.getElementById("githubname");
const clearAll = document.getElementById("clear-last-users");
const lastusers = document.getElementById("last-users");
const github = new Github();
const ui = new UI();

eventListeners();
function eventListeners(){
    submit.addEventListener("submit", getGithub);
    document.addEventListener("DOMContentLoaded", ui.displayStorage());
    clearAll.addEventListener("click", clearAllDate);
    lastusers.addEventListener("click", deleteItem);
}

function deleteItem(e){
    if(e.target.textContent === "SİL"){
        ui.deleteItemUI(e.target);
        storage.deleteItemStorage(e.target.previousSibling.textContent.trim());
        ui.messageBox("warning", "Silme işlemi başarı ile gerçekleştmiştir");
    }
}

function clearAllDate(){
    let users = storage.localStorageControl();
    let control = false;
    if(confirm("Tüm arananlar silinecektir onaylıyormusunuz")){
        users.forEach(user =>{
            if(user != ""){
                ui.removeDisplayUI();
                storage.getRemoveLocalStorage();
                control = true;
            }
        });
        if(control == false){
            ui.messageBox("danger", "Silinecek arama bulunamamaktadır"); 
        }else{
            ui.messageBox("warning", "Silme işlemi başarı ile gerçekleştmiştir");
        }
    }
}

function getGithub(e){
    let value = githubname.value.trim();
    if(value === ""){
        ui.messageBox("danger","Boş değer giremezsiniz");
    }else{
        github.getExchangeData(value)
        .then(responce => {
            if(responce.user.message === "Not Found"){
                ui.messageBox("warning","Böyle bir kullanıcı bulunamamıştır");
            }else{
                ui.messageBox("success","İşlem başarılı");
                ui.andSearchedUser(value);
                storage.getUserToLocalStorage(value);
                ui.getExchangeUser(responce.user);
                ui.getExchangeRepo(responce.repo);
            }
        })
        .catch(err => console.error(err));
    }
    ui.clearInput(githubname);
    e.preventDefault();
}