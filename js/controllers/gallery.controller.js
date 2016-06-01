app.controller('galleryCtrl',['$scope','$stateParams','$location', 'categoriesFactory', function ($scope, $stateParams,$location, categoriesFactory) {
    $scope.pictures = categoriesFactory.pictures;

    /**
    * when user has clicked single image,
    * he should be redirected to picturePanel Page
    */
    $scope.editPicture = function(picture) {
    	// console.dir(picture);
    	categoriesFactory.currentPicture = picture;
    	$location.path("picturePanel");
    }

}]) ;

