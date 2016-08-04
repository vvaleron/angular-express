import 'jquery';
import angular from 'angular';
import 'angular-resource';
import 'angular-ui-router';
import 'angular-sanitize';

import './services/services';
import './directives/directives';
import './services/version-service';

import mainRoutes from './components/main/main.routes';
function apiInterceptor ($q) {
    const API_URL = 'http://localhost:3000/';

    return {
        request: function (config) {
            const url = config.url;
            // ignore template requests
            if (url.substr(url.length - 5) === '.html') {
                return config || $q.when(config);
            }

            config.url = API_URL + config.url;
            return config || $q.when(config);
        }
    };
}

angular.module('angular', ['ngResource', 'ui.router', 'services', 'directives', 'ngSanitize', 'version'])

.config(mainRoutes)
.config(function ($httpProvider) {
    $httpProvider.interceptors.push(apiInterceptor);
});

