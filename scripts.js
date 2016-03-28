var myApp = angular.module('myApp', []);

myApp.controller('myController', function($scope) {

    $scope.imagesArr = [
        '<img class="img-thumbnail" src="images/image1.jpg" name="img1" >',
        '<img class="img-thumbnail" src="images/image2.jpg" name="img2" >',
        '<img class="img-thumbnail" src="images/image3.jpg" name="img3" >',
        '<img class="img-thumbnail" src="images/image4.jpg" name="img4" >',
        '<img class="img-thumbnail" src="images/image5.jpg" name="img5" >'
    ];

    $scope.images = [{
            src: 'images/image1.jpg',
            name: 'img1',
            evnt: 'img1.src'
        }, {
            src: 'images/image2.jpg',
            name: 'img2',
            evnt: 'preview.src=img2.src'
        }, {
            src: 'images/image3.jpg',
            name: 'img3',
            evnt: 'preview.src=img3.src'
        }, {
            src: 'images/image4.jpg',
            name: 'img4',
            evnt: 'preview.src=img4.src'
        }, {
            src: 'images/image5.jpg',
            name: 'img5',
            evnt: 'preview.src=img5.src'
        }

    ];

    $scope.swapImage = function(n) {
        // console.log(angular.element('[name="preview"]'));
        // console.log(angular.element('[name="' + $scope.images[n].name + '"'));
        angular.element('[name="preview"]').attr('src',
            angular.element('[name="' + $scope.images[n].name + '"').attr('src'));
    };


});
