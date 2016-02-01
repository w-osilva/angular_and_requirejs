define(['./module'], function (filters) {
    'use strict';

    return filters.filter('consonants', function () {
        return function(string) {

            if(!angular.isString(string)) return "";

            var vowels = ['a', 'e', 'i', 'o', 'u'];
            var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
            var consonants = "";

            angular.forEach(string, function(letter, key){
                if(!(vowels.indexOf(letter) !== -1) && !(numbers.indexOf(letter) !== -1))
                    consonants += letter;
            });

            return consonants;
        }
    });
});