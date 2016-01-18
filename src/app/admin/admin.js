import angular from 'angular';
import uiRouter from 'angular-ui-router';
import angularComponent from 'angular-component';
import Common from './common/common';
import Components from './components/components';
import AdminComponent from './admin.component';
import 'normalize.css';

angular.module('99fit', [
  uiRouter,
  Common.name,
  Components.name
])

.component('99fit', AdminComponent);
