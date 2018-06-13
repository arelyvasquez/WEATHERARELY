var Clima =angular.module("Clima",[]);
Clima.controller("temperatura",function($scope,$http) {

	$scope.paises= function(lugar){
		$scope.lugarBusqueda=lugar;
	
		$http({
			method:"GET",
			url:"http://openweathermap.org/data/2.5/weather?q="+lugar+",GT&appid=b6907d289e10d714a6e88b30761fae22"                                                                                                                                       
		}).then(function successCallback(x){
			console.log(x);
			$scope.tempmax = x.data.main.temp_max;
			$scope.tempmin = x.data.main.temp_min;
			$scope.hume = x.data.main.humidity;
			$scope.presion = x.data.main.pressure;
		})
	}	

})