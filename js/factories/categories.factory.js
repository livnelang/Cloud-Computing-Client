app.factory('categoriesFactory', function($http, $q) {
    var _prodFactory = {};
    _prodFactory.pictures = {};

    console.log('factory loaded');
    // var url = 'http://localhost:3000/';
    var url ='http://52.40.208.124:3000/';


    $http.get(url + 'getRedisImages').then( function(response) {
        _prodFactory.pictures = response.data.data;
        console.log('factory data is here');
    });


    /**
    * Get All pictures from API
    */
    _prodFactory.getPictures = function() {
        return $http.get(url + 'getRedisImages');
    };

    /**
    * Sets the current editable picturem for picturePanel UI Page
    */
    _prodFactory.setEditPicture = function() {
        return $http.post(url + 'api/picture/picturesByCategory');
    };


    return _prodFactory;
});