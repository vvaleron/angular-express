export default /*@ngInject*/ function($http) {
    this.applicationName = 'angular';
    this.click = function () {
        $http.get('valera').then((data) => {
            console.log(data);
            debugger;
        });
    };
}
