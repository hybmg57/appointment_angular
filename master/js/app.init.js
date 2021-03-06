/*!
 * 
 * Angle - Bootstrap Admin App + AngularJS
 * 
 * Author: @themicon_co
 * Website: http://themicon.co
 * License: http://support.wrapbootstrap.com/knowledge_base/topics/usage-licenses
 * 
 */

if (typeof $ === 'undefined') { throw new Error('This application\'s JavaScript requires jQuery'); }


// APP START
// ----------------------------------- 

var AppInit = angular.module('appointment', [
    'ngRoute',
    'ngAnimate',
    'ngStorage',
    'ngCookies',
    'pascalprecht.translate',
    'ui.bootstrap',
    'ui.router',
    'oc.lazyLoad',
    'cfp.loadingBar',
    'ngSanitize',
    'ngResource',
    'ng-token-auth'
]);

AppInit.config(function($authProvider){
  $authProvider.configure({
     apiUrl: '/api'
  });
});


var App = AppInit.run(["$rootScope", "$state", "$stateParams",  '$window', '$templateCache', function ($rootScope, $state, $stateParams, $window, $templateCache) {
          // Set reference to access them from any scope
          $rootScope.$state = $state;
          $rootScope.$stateParams = $stateParams;
          $rootScope.$storage = $window.localStorage;

          // Uncomment this to disables template cache
          /*$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
              if (typeof(toState) !== 'undefined'){
                $templateCache.remove(toState.templateUrl);
              }
          });*/

          $rootScope.$on('auth:login-success', function(){
            console.log('Login success');
            $state.go('app.dashboard');
          });

          $rootScope.$on('auth:invalid', function(){
            console.log('errror1');
            $state.go('page.login');
          });

          // Scope Globals
          // -----------------------------------
          $rootScope.app = {
            name: 'Appointment Reminder',
            description: 'Phone, Text and Email reminders',
            year: ((new Date()).getFullYear()),
            layout: {
              isFixed: true,
              isCollapsed: false,
              isBoxed: false,
              isRTL: false
            },
            viewAnimation: 'ng-fadeInUp'
          };
          $rootScope.user = {
            name:     'Jae',
            job:      'Developer',
            picture:  'app/img/user/02.jpg'
          };
        }
      ]);

