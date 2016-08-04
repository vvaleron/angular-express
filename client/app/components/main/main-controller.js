export default /*@ngInject*/ function($http) {
    this.applicationName = 'angular';
    this.model = {
        users: []
    };
    this.click = () => {
        $http.get('users').then((response) => {
            this.model.users = response.data;
        });
    };
}
