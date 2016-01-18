/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('app')
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    //.constant('BaseUrl', 'http://localhost:8081');
    .constant('BaseUrl', 'http://ec2-52-32-227-158.us-west-2.compute.amazonaws.com:8081');

})();
