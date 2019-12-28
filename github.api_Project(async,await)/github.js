class Github{
    constructor(){
        this.url = `https://api.github.com/users/`;
    }

    async getExchangeData(username) {
        let responceUser = await fetch(this.url + username);
        let responceRepo = await fetch(this.url + username + "/repos");

        let userData = await responceUser.json();
        let repoData = await responceRepo.json();

        return {
            user:userData,
            repo:repoData
        }
    }
}