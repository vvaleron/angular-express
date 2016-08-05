/*@ngInject*/
function RestService ($http) {
    function getUsers () {
        return $http.get('users');
    }

    return {
        getUsers
    };
}

export default RestService;
