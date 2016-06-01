var app = angular.module("app", ["ui.router"]);

app.config(function($stateProvider, $urlRouterProvider)  {

    $urlRouterProvider.otherwise("/home");

    $stateProvider
        .state('gallery', {
            url: '/gallery',
            templateUrl: '../views/gallery.html',
            controller: 'galleryCtrl'
        })
        .state('home', {
            url: '/home',
            templateUrl: '../views/home.html',
            controller: ''
        })
        .state('picturePanel', {
            url: '/picturePanel',
            templateUrl: '../views/picturePanel.html',
            controller: 'picturePanelCtrl'
        })
        .state('upload', {
            url: '/upload',
            templateUrl: '../views/upload.html',
            controller: 'uploadController'
        });
        // .state('login', {
        //     url: '/login',
        //     templateUrl: '../views/login.html',
        //     controller: 'picturePanelCtrl'
        // });
}); 


/**
 * app mainController
 * 1. init first data from aws server
 * 2. set Accurate categories in $rootScope
 * 3. Set default Pictures
 */
app.controller('mainController',['$scope','$location','categoriesFactory','$state', function ($scope,$location, categoriesFactory, $state) {
    $scope.name = "livne";
    var catgs = ['sports', 'nature','music', 'cartoons'];
    console.log('mainController panel ..');

    // categoriesFactory.getPictures().then(function(data)  {
    //     console.log('data is here');
    //     // $scope.data = data.data;
    //     // $scope.setCategories();
    // });

    // var url = 'http://localhost:3000/';
    var url ='http://52.40.208.124:3000/';
    $scope.url = url;  // set the default url




    /**
     * Set Pictures categories
     */
    $scope.setCategories = function() {
        angular.forEach(catgs, function(name) {
                angular.forEach($scope.data, function(item) {
                    if (name == item['_id']) {
                        categoriesFactory.pictures[name] = item.items;
                    }
                });
        });
        console.log('setCategories done');
        //set default pictures category for the view
        categoriesFactory.currentPictures = categoriesFactory.pictures['sports'];
    };

    /**
     * When selecting a new category
     */
    $scope.changeCategory = function(cat) {
        console.log('inside changeCategory: ' + cat);
        //TODO
        categoriesFactory.currentPictures = $scope.pictures[cat];
        console.log('current location: ' + $location.path());
        $location.path( "gallery" );
    };


    $scope.toggleMenu = function() {
        $(".main-sidebar").toggleClass("expand");
    }
}]) ;


/**
 * upload controller
 */
app.controller('uploadController',['$scope','$location','$http','$state', function ($scope, $location, $http, $state) {
    console.log('upload Ctrl');
    $scope.picture = {};
    $scope.isUpload = false;
    $scope.isDone = false;
    $scope.current_upload = false;

    $scope.url = $scope.$parent.url;
    console.log($scope.url);



    /*
     * On upload click
     */
    $scope.upload = function() {
        // toggle upload classes
        $scope.isUpload = true;
        $scope.current_upload = true;
        
        
        console.log('upload clicked');
        console.dir($scope.picture);


        $http.post($scope.url + 'api/picture', $scope.picture).then( function(response) {
            // toggle back-off upload classes
            if(response.data.status) {
                alert('wrong authentication');
                $state.go('gallery', {}, {reload: true});
            }
            $scope.isUpload = false;
            $scope.isDone = true;
            console.log(response);
        });
    };



}]);