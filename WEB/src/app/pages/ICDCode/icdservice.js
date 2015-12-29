(function(){
	angular.module('app').factory('icdCodeService',ICDCodeService);

	function ICDCodeService($http,$log,BaseUrl)
	{
		
		return {
    SaveICD: function (data,cb) {
     $http({
    method: 'POST',
  url: BaseUrl +'/ICDCode',
  data :data 
}).then(function (response) {
    cb(false);
  }, function (response) {
   cb(true);
  });
    }
  }
	}
})();