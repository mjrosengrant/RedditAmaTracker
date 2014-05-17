myApp.controller('OptionController', function($scope){
    $scope.selection = "";

    $scope.setSelection= function(newChoice){
        $scope.selection = newChoice;
        scope.$apply();
    }
});