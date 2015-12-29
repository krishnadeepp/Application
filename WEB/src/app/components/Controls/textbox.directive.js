(function(){
	angular.module('app').directive('textbox',textBox);
	function textBox(){
			var directive = {
			templateUrl : "app/components/controls/textbox.html",
			require:"^formTemplate",
			link : linkfn
			
			};  
			return directive;	
			function linkfn(scope,elem,attr,ctrl){
				scope.data = {};
				scope.save = function(txt)
				{
					ctrl.passInfo(angular.copy(txt));
				}
				
		  			
			}  
	}


})(); 