import mainTpl from './main.jade';
import 'components/main/main.scss';
import mainCtrl from 'components/main/main-controller';

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
