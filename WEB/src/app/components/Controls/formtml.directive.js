(function(){
	angular.module("app").directive('formTemplate',formTemplate);

	function formTemplate($compile,$log){
		var directive = {
			templateUrl : "app/components/controls/formtemplate.html",
			link : formTemplateLinkFn,
			controller: formTemplatectrl,
			scope : {
				saveform:'&'
			}
			

		};
		return directive;
		function formTemplateLinkFn(scope, elem,attr,ctrl) {

			angular.element(elem).find('#template').html($compile("<textbox></textbox>")(scope));				
			
	
		}
		function formTemplatectrl($scope){
			this.passInfo = function(obj)
			{
				 
				$scope.saveform({data:obj});

			}
		}
	}

	
})();