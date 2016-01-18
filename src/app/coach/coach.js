import angular from 'angular';
import uiRouter from 'angular-ui-router';
import angularComponent from 'angular-component';
import Common from './common/common';
import Components from './components/components';
import CoachComponent from './coach.component';
import 'normalize.css';

angular.module('99fit',[
    
])

.component('99fit',CoachComponent);