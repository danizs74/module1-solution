(function(){
	angular.module('LunchCheck',[])
	.controller('LunchController',LunchController)

	LunchController.$inject=['$scope'];

	function LunchController($scope){
		$scope.items = "";
    $scope.message = "";
		$scope.checkitems = function(){

			var items_array = $scope.items.split(",");



			var count = calculateCount(items_array);


			if(count == 0 ){
				$scope.message = "empty items";
			}
			else if(count <=3){
			$scope.message = "Enjoy!";
			}
			else{
				$scope.message = "Too much!";
			}
		};
	}


	function calculateCount(string){
		var cnt = 0;
		for(var i=0;i<string.length;i++){
			if(!(isEmpty(string[i]))){
				cnt+= 1 ;
			}
		}
		return cnt;
	}

	function isEmpty(val){
    return (val === undefined || val == null || val.length <= 0) ? true : false;
	}
})();
