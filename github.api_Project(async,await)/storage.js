class storage{
    constructor(){
    }

    static localStorageControl(){
        let users;
        if(localStorage.getItem("users") === null){
            users = [];
        }else{
            users = JSON.parse(localStorage.getItem("users"));
        }
        return users;
    }

    static getUserToLocalStorage(username){
        let users = this.localStorageControl();
        if(users.indexOf(username) === -1){
            users.push(username);
        }
        localStorage.setItem("users",JSON.stringify(users));
    }

    static getRemoveLocalStorage() {
        localStorage.removeItem("users");
    }

    static deleteItemStorage(e) {
        let users = this.localStorageControl();
        users.forEach(function(x,index){
            if(e === x){
                users.splice(index,1);
            }
        })
        localStorage.setItem("users", JSON.stringify(users));
    }

}