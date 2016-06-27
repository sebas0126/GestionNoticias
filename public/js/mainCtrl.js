angular.module('criterioME', ['firebase'])
    .controller('ctrl', function($scope, $firebaseObject) {

    $scope.txtNoticia = "";
    $scope.txtTitulo = "";

    var fb = new Firebase("https://prueba-hermeco-9f10c.firebaseio.com");

    // See https://firebase.google.com/docs/web/setup#project_setup for how to
    // auto-generate this config
    /*var config = {
        apiKey: "AIzaSyAAGHVtzRtc7qVv4h-VozDe45zDXACrVNY",
        authDomain: "criteriochat.firebaseapp.com",
        databaseURL: "https://criteriochat.firebaseio.com",
        storageBucket: "criteriochat.appspot.com",
    };
    firebase.initializeApp(config);

    var fb = firebase.database().ref();*/

    var fbObject = $firebaseObject(fb);

    fbObject.$bindTo($scope, "dato");   

    $scope.agregarNoticia = function(){
        if($scope.dato.hasOwnProperty("noticias") !== true) {
            $scope.dato.noticias = [];
        }
        if($scope.txtNoticias != "" && $scope.txtTitulo != ""){
            $scope.dato.noticias.push({titulo: $scope.txtTitulo, contenido : $scope.txtNoticia});
        }
        $scope.txtNoticia = "";
        $scope.txtTitulo = "";
    }

    $scope.borrarNoticia = function(index){
        $scope.dato.noticias.splice(index, 1);
    }

}).directive('ngEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.ngEnter);
                });

                event.preventDefault();
            }
        });
    };
});