import angular from 'angular';
import AppTransformer from './app.transformer';

export default angular.module('transformers', [])
.config(AppTransformer)
.name;
