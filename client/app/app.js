import 'jquery';
import angular from 'angular';
import 'angular-resource';
import 'angular-ui-router';
import 'angular-sanitize';
import 'angular-material/angular-material.css';
import 'font-awesome/css/font-awesome.css';
import angularAnimate from 'angular-animate';
import angularMaterial from 'angular-material';

import CoreServices from './core/services';
import Transformers from './core/transformers';
import Components from './components';

angular.module('angular', [
    'ngResource',
    'ui.router',
    'ngSanitize',
    angularAnimate,
    angularMaterial,

    Transformers,
    CoreServices,
    Components
]);

