var app = angular.module("myApp", []);
app.controller("myCtrl", function ($scope, $window) {
   $scope.people = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phoneNumber: "",
      checkinDate: null,
      checkoutDate: null,
      totalPrice: 0
   };
   $scope.roomsRegistered = [{
      selected: false,
      roomcode: 1,
      roomName: "Bohol",
      roomPrice: 7800.00,
      maxNumberofGuests: 2,
      description: "1 Queen size bed"
   },
   {
      selected: false,
      roomcode: 2,
      roomName: "Vigan",
      roomPrice: 8200.00,
      maxNumberofGuests: 3,
      description: "1 Queen size bed and 1 single bed"
   },
   {
      selected: false,
      roomcode: 3,
      roomName: "Cebu",
      roomPrice: 9000.00,
      maxNumberofGuests: 4,
      description: "2 Queen size bed"
   },
   {
      selected: false,
      roomcode: 4,
      roomName: "Siargao",
      roomPrice: 10000.00,
      maxNumberofGuests: 2,
      description: "Deluxe room - King size bed"
   },
   {
      selected: false,
      roomcode: 5,
      roomName: "Coron",
      roomPrice: 11000.00,
      maxNumberofGuests: 4,
      description: "With mini kitchen and 2 queen size bed"
   },
   {
      selected: false,
      roomcode: 6,
      roomName: "Manila",
      roomPrice: 15000.00,
      maxNumberofGuests: 8,
      description: "Penthouse - 3 bedrooms with kitchen"
   },
   ];

   $scope.roomcart = [];
   $scope.registered = [];
   $scope.addtocart = function (room) {
      if (room.selected === true) {
         $scope.roomcart.push(room);
      } else {
         $scope.roomcart.splice($scope.roomcart.indexOf(room), 1);
      }
      $scope.people.totalPrice = 0
      for (i = 0; i < $scope.roomcart.length; i++) {
         $scope.people.totalPrice = $scope.people.totalPrice + $scope.roomcart[i].roomPrice;
      }

   };
   $scope.save = function () {

      var f = document.getElementsByTagName('form')[0];
      if (f.checkValidity()) {
         $scope.registered.push($scope.people);
         $window.location.href = "bookingconfirmation.html";
      }
   };
});