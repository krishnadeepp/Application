/*jshint unused: false */
(function(){
    angular.module('app').directive('masterMenu',menuDirective);
	function menuDirective($log)
	{
		var directive = {
			templateUrl :  "app/modules/menu/menu.html",
			link : menuLink,
			replace :true
		};
	
		return directive;
		function menuLink(scope,elem,attr)
		{
		
		scope.items = attr.items.split(',')
		}
	
	}
})();