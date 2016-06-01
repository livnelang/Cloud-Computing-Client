app.controller('picturePanelCtrl',['$scope','$stateParams','$http', '$location', '$state', 'categoriesFactory', function ($scope, $stateParams, $http, $location, $state, categoriesFactory) {
	$scope.picture = categoriesFactory.currentPicture;

    $scope.url = $scope.$parent.url;
    console.log($scope.url);

    /**
     * On delete picture trigger
     */
    $scope.deletePicture = function() {

        var modal = angular.element('#myModal');
        modal.modal();



    };

    /**
     * When user approved delete
     */
    $scope.deleteApproved = function() {
        console.log('inside delete');

        var picture_id = $scope.picture._id;

        var config  = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        $http.post($scope.url + 'api/picture/delete', {'picture_id': picture_id, 'title': $scope.picture.title}).then( function(response) {
            // toggle back-off upload classes
            // $scope.isUpload = false;
            // $scope.isDone = true;
            console.log(response);
            // $location.path('/gallery');
            var modal = angular.element('#myModal');
            modal.modal("hide");
            angular.element('.modal-backdrop').remove();
            $state.go('gallery', {}, {reload: true});
            
        });
    }

}]) ;       

