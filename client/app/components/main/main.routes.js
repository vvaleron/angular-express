import mainTpl from './main.jade';
import mainCtrl from './main-controller';

export default /*@ngInject*/ function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('main', {
        url: '/',
        views: {
            '@': {
                template: mainTpl,
                controller: mainCtrl,
                controllerAs: 'mainCtrl'
            }
        }
    });
}
