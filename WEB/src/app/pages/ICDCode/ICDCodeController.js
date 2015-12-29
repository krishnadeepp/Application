(function(){
	'use strict';
	angular.module('app').controller('ICDCodeController',ctrl );

	function ctrl($scope,$log,$state,icdCodeService)
	{

    $scope.data = {};
    $scope.type = {"P":"P","D":"D"};
    $scope.default = "Select Type";
    $scope.effdtopened = false;
    $scope.enddtopened = false;
     
     $scope.openEffDate = function($event) {
        $scope.effdtopened = true;
      };
      $scope.openEndDate = function($event) {
        $scope.enddtopened = true;
      };
  $scope.slectValue = function(item,value){
    
   
    $scope.default = value;
    $scope.data.type = value;
  };

  $scope.SaveForm = function()
  {
    icdCodeService.SaveICD($scope.data,function(err){
      if(!err)
        $state.go('home');
    });
  }
  }
	
})();