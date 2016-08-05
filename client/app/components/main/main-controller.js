class MainController {
    /*@ngInject*/
    constructor (RestService) {
        this.users = [];
        this.RestService = RestService;
    }

    click () {
        this.getUsers();
    }

    getUsers () {
        this.RestService.getUsers()
            .then((response) => {
                this.users = response.data;
            });
    }
}

export default MainController;
