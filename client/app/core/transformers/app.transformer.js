function apiInterceptor ($q) {
    const API_URL = 'http://localhost:3000/';

    return {
        request: function (config) {
            const url = config.url;

            if (url.substr(url.length - 5) === '.html') {
                return config || $q.when(config);
            }

            config.url = API_URL + config.url;
            return config || $q.when(config);
        }
    };
}

export default /*@ngInject*/ function ($httpProvider) {
    $httpProvider.interceptors.push(apiInterceptor);
}
