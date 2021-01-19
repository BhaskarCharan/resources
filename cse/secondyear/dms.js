var app = angular.module('MyApp', [])
        app.controller('MyController', function ($scope, $window) {
            $scope.subject = [
               
                { Name: "Unit-1", video: "  https://youtube.com/playlist?list=PLzaB5mSrs9mALwNKKmeOeJYY1yuL800l9  " },
                { Name: "Unit-2", video: "  https://youtube.com/playlist?list=PLzaB5mSrs9mDjuzPjW5BxtAC07OiGZ5cq  " },
                { Name: "Unit-3", video: " https://youtube.com/playlist?list=PLzaB5mSrs9mAUYO-pB6uXIhbpEL2x3I-u " },
                { Name: "Unit-4", video: " https://www.youtube.com/playlist?list=PLzaB5mSrs9mAkQek89o6XetZG3z1uc67m " },
                { Name: "Unit-5", video: "  https://youtube.com/playlist?list=PLzaB5mSrs9mDGpU4R9KVq5UGqVHaqA3Bx  " }
               
                ];
 
            
 
           
        });