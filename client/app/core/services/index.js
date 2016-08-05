import angular from 'angular';
import RestService from './rest.service';

export default angular.module('services', [])
.factory('RestService', RestService)
.name;
