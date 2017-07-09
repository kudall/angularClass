(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController ($scope) {
  $scope.itemCount = -1;
  $scope.dishes = "";

  $scope.countItems = function () {
    if ($scope.dishes)
    {
      var arrayOfDishes = $scope.dishes.split(",");
      $scope.itemCount = arrayOfDishes.length;
    }
    else {
      $scope.itemCount = 0;
    }
  }

  $scope.getMessage = function () {
    if ($scope.itemCount < 0)
      return "";
    else if ($scope.itemCount==0)
      return "Please enter data first";
    else if ($scope.itemCount<4)
      return "Enjoy!";
    else
      return "Too much!";
  }

};

})();
