var app = angular.module('datashare', ['ngRoute']);
//routing stuff
app.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider){
    $routeProvider
		.when("/", {
			templateUrl: "Contact_us.html",
			controller: "ContactCtrl"
		})
		.when("/page2", {
			templateUrl: "Confirmation_Contact_Us.html",
			controller: "ConfirmationCtrl"
		})

		;
}]);

app.controller("ContactCtrl", function($scope, srvShareData, $location) {
  $scope.fullName;

  $scope.shareMyData = function(Finame, Laname, Elmail, Mesge) {

    if(Finame!= null && Laname!= null && Elmail!= null && Mesge!= null){
      $scope.fullName=  Finame + " " + Laname;
      //send scopes to the share data service
      srvShareData.addData($scope.fullName);
      //sends the confirmation page route
      window.location.href = "Confirmation_Contact_Us.html";

    }

  }
});

app.controller("ConfirmationCtrl", function($scope, srvShareData) {
  //calling the getter function
  $scope.sharedData = srvShareData.getData();

});

app.service('srvShareData', function($window) {
        var obj1;
        //the setter
        var addData = function(newObj) {
            //saves data to the my data
            var mydata = newObj;

            //turns data to string and save data to storage
            $window.sessionStorage.setItem(obj1, JSON.stringify(mydata));


        };
        //the getter
        var getData = function(){
          //calls the data from storage
          var mydata = $window.sessionStorage.getItem(obj1);

          //converts data back to object
        mydata = JSON.parse(mydata);

        return mydata;
        };

        return {
            addData: addData,
            getData: getData
        };
    });
