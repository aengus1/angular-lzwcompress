/**
 * Created by aengusmccullough on 2016-10-16.
 *
 * index.js
 *
 * Copyright (c) 2016 Aengus McCullough
 * Licensed under the MIT license.
 *
 */
var lzwcompress = require('lzwcompress');

(function (String, angular) {
    'use strict';

    var app = angular.module('angular.lzwcompress', []);

    app.service('lzw', function() {
        this.pack = function (x) {
            return lzwcompress.pack(x);
        };

        this.unpack = function(x){
            return lzwcompress.unpack(x);
        }
    });
    module.exports = angular.module('angular.lzwcompress').name;

}(String, angular));
