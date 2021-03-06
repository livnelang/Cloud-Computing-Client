/******************************
 *
 * Header
 *
 ******************************/
app.directive('galleryHeader',function(){
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'templates/gallery-header.html',
    };
});


/******************************
 *
 * Sidebar
 *
 ******************************/
app.directive('gallerySidebar',function(){
    return {
        restrict: 'E',
        //replace: true,
        templateUrl: 'templates/gallery-sidebar.html',
        compile: function(tElem,attrs) {
            return function(scope,elem,attrs) {

            };
        }
    };
});


/******************************
 *
 * Content
 *
 ******************************/
app.directive('galleryContent',function(){
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'templates/gallery-content.html',
        compile: function(tElem,attrs) {
            return function(scope,elem,attrs) {

            };
        }
    };
});

/******************************
 *
 * Footer
 *
 ******************************/
app.directive('adminFooter',function(){
    return {
        restrict: 'E',
        replace: true,
        scope:{
            courses :'=',
        },
        templateUrl: 'templates/admin-footer.html',
        compile: function(tElem,attrs) {
            return function(scope,elem,attrs) {

            };
        }
    };
});


app.directive("fileread", [function () {
    return {
        scope: {
            fileread: "=",
            filename: "="
        },
        link: function (scope, element, attributes) {
            element.bind("change", function (changeEvent) {
                var reader = new FileReader();
                reader.onload = function (loadEvent) {
                    scope.$apply(function () {
                        scope.fileread = loadEvent.target.result;
                    });
                };
                var fname = changeEvent.target.files[0].name;
                fname = fname.substr(0, fname.lastIndexOf("."));
                console.log(fname);

                scope.filename = fname;
                reader.readAsDataURL(changeEvent.target.files[0]);
            });
        }
    }
}]);