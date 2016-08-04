import angular from 'angular';
import RestService from './rest.service';

angular.module('services', [])
    .factory('RestService', RestService);
