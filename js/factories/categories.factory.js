app.factory('categoriesFactory', function($http, $q) {
    var _prodFactory = {};
    _prodFactory.pictures = {};

    console.log('factory loaded');
    // var url = 'http://localhost:3000/';
    var url ='http://52.35.37.150:3000/';


    // // test localhost server first
    // $.ajax(url + 'online', {
    //     timeout:500,
    //     error: function (request, status, error) {
    //         alert(request.responseText);
    //         changeUrl();
    //     }
    // });
    //
    // function changeUrl() {
    //     url = 'http://52.35.37.150:3000';
    // }




    $http.post(url + 'api/picture/picturesByCategory').then( function(response) {
        _prodFactory.items = response.data;
    });


    /**
    * Get All pictures from API divided by their categories
    */
    _prodFactory.getPictures = function() {
        return $http.post(url + 'api/picture/picturesByCategory');
    };

    /**
    * Sets the current editable picturem for picturePanel UI Page
    */
    _prodFactory.setEditPicture = function() {
        return $http.post(url + 'api/picture/picturesByCategory');
    };


    return _prodFactory;
});