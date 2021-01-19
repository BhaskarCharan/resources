var app = angular.module('MyApp', [])
        app.controller('MyController', function ($scope, $window) {
            $scope.subject = [
             
			    { Name: "UNIT-1 Lecture 1 ", video: "https://youtu.be/Og1Ujcx0jkE"},
			    { Name: "UNIT-1 Lecture 2", video: "https://youtu.be/wYXNSTHZAPI"}, 
			    { Name: "UNIT-1 Lecture 3", video: "https://youtu.be/RijZ9I2YuCQ"},
			    { Name: "UNIT-1 Lecture 4", video: "https://youtu.be/lEg-s5DiOxs"},
				{ Name: "UNIT-1 Lecture 5", video: "https://youtu.be/PwFjlIn4ZrM"},
				{ Name: "UNIT-1 Lecture 6", video: "https://youtu.be/_duVYf5iRGE"},
				{ Name: "UNIT-1 Lecture 7", video: "https://youtu.be/G5Cm3rzfxvQ"},
				{ Name: "UNIT-1 Lecture 8", video: "https://youtu.be/gSBxC7Yqz4s"},
				{ Name: "UNIT-1 Lecture 9", video: "https://youtu.be/REdzhgPUsIA"},
				{ Name: "UNIT-1 Lecture 10", video: "https://youtu.be/bL4hZ__f0h4"},
			    { Name: "UNIT-1 Lecture 11", video: "https://youtu.be/KcOqyXl6Hc8"},
				{ Name: "UNIT-1 Lecture 12", video: "https://youtu.be/b8I_vyzJjjE"},
				
    
                { Name: "UNIT-2 Lecture  1 ", video: "https://youtu.be/B8LTLbs2v1k"},
                { Name: "UNIT-2 Lecture  2", video: " https://youtu.be/qhf2MoYlJWs"},
                { Name: "UNIT-2 Lecture  3", video: "https://youtu.be/ilEb0lskmoA"},
                { Name: "UNIT-2 Lecture  4", video: " https://youtu.be/CPV0HXwuQc0"},
                { Name: "UNIT-2 Lecture  5", video: " https://youtu.be/UX191OhVSdI"},
                { Name: "UNIT-2 Lecture  6", video: " https://youtu.be/V36fWbG9vaI"},
                { Name: "UNIT-2 Lecture  7", video: " https://youtu.be/2XevlCDSrSA"},
                { Name: "UNIT-2 Lecture  8", video: "https://youtu.be/FaAZ3KvkV7k"},
                { Name: "UNIT-2 Lecture  9", video: " https://youtu.be/AyyjzVi_jrI"},
                { Name: "UNIT-2 Lecture  10", video: " https://youtu.be/gK_nMm52wEE"},
                { Name: "UNIT-2 Lecture  11", video: "https://youtu.be/ARzl6awnaiY"},
                { Name: "UNIT-2 Lecture  12", video: "https://youtu.be/wNUXO6Dybfw"},
                

                { Name: "UNIT-3 Lecture  1 ", video: "https://youtu.be/VDIYijmZMlA"},
                { Name: "UNIT-3 Lecture  2", video: "https://youtu.be/pumLmRdL8wc"},
                { Name: "UNIT-3 Lecture  3", video: " https://youtu.be/RANepQXObHI"},
                { Name: "UNIT-3 Lecture  4", video: " https://youtu.be/XgQh8p8MZmg"}, 
                { Name: "UNIT-3 Lecture  5", video: " https://youtu.be/tekz8udSmtw"},
 
                { Name: "UNIT-4 Lecture  1", video: "https://youtu.be/o7qFf6xQ5Jo"},
                { Name: "UNIT-4 Lecture  2", video: "https://youtu.be/W4NhZkxCk48"}, 
                { Name: "UNIT-4 Lecture  3", video: "https://youtu.be/X9jUYBruFGk"},
	            { Name: "UNIT-4 Lecture  4", video: "https://youtu.be/cg3vkcI28Pw"},
	            { Name: "UNIT-4 Lecture  5", video: "https://youtu.be/vPaNKdYeaEM"},
	            { Name: "UNIT-4 Lecture  6", video: "https://youtu.be/K-r5vFpr3YQ"},
	            { Name: "UNIT-4 Lecture  7", video: "https://youtu.be/WLH9ZoEfwwI"},
		        { Name: "UNIT-4 Lecture  8", video: "https://youtu.be/PCQnH6SUZW8"}, 
		        { Name: "UNIT-4 Lecture  9", video: "https://youtu.be/V6F1FLwyh8s"},
		        { Name: "UNIT-4 Lecture  10", video: "https://youtu.be/sPRHOUS95Z8"},
		        { Name: "UNIT-4 Lecture  11", video: "https://youtu.be/CKG8fPhq-UU"},
			 
			    { Name: "UNIT-5 Lecture 1 ", video: "https://youtu.be/Ig_ExbgGusA"},
			    { Name: "UNIT-5 Lecture 2 ", video: "https://youtu.be/15XGVfmy40M"},
			    { Name: "UNIT-5 Lecture 3 ", video: "https://youtu.be/OBRX-1D6Gmw"},
			    { Name: "UNIT-5 Lecture 4 ", video: "https://youtu.be/62nwi9ivVmU"},
				{ Name: "UNIT-5 Lecture 5 ", video: "https://youtu.be/6FBbyht5_WI"},
				{ Name: "UNIT-5 Lecture 6 ", video: "https://youtu.be/lBMT9-Q447Y"},
				{ Name: "UNIT-5 Lecture 7 ", video: "https://youtu.be/WmfLhXQ0VyY"}, 
				{ Name: "UNIT-5 Lecture 8 ", video: "https://youtu.be/nL65NPTxicQ"},
			    { Name: "UNIT-5 Lecture 9 ", video: " https://youtu.be/ksjnqfzrQrA"},
			    { Name: "UNIT-5 Lecture 10 ", video: " https://youtu.be/aXzWuCtHzFQ"},
				{ Name: "UNIT-5 Lecture 11", video: "https://youtu.be/ZAzPqSSD9Rc"},
			    { Name: "UNIT-5 Lecture 12", video: "https://youtu.be/cYHDZZXbH24"},
				{ Name: "UNIT-5 Lecture 13", video: "https://youtu.be/tDNgC-pxJMQ"},
				{ Name: "UNIT-5 Lecture 14 ", video: "https://youtu.be/l9VFUIPsLK8"},
				{ Name: "UNIT-5 Lecture 15 ", video: "https://youtu.be/hWMp94v_aOc"},
				{ Name: "UNIT-5 Lecture 16 ", video: " https://youtu.be/JTzKuRXCyhU"},
 
                ];
 
            
 
           
        });