# angular-lzwcompress
Angular 1 binding for the lzwcompress library.  

This package provides a thin wrapper around [LzwCompress](https://github.com/floydpink/lzwCompress.js) to enable it to be easily used in an
angular project.


### Usage:

####  Browserify

Install lzwCompress from npm:

```
npm install --save angular-lzwcompress
```

Update package.json:

```json
"browser": {    
    "lzwcompress": "./node_modules/angular-lzwcompress/index.js"
  }
```

Add a dependency to your angular module:

```javascript
var app = angular.module('MyModule', [    
    require('angular-lzwcompress');
]);
```

Use it:
```javascript
app.service('MyService',function($http,lzw) {
    return {
        fetchData: function (id) {			
			 return $http.get(ENV.API_URL + '/id')
                        .then(function (result) {
                          // to decompress anything from within JS
                    	    return lzw.unpack(result);
                    	    // to compress it
                    	    return lzw.pack(result);   
                    });                    
        }
    }
});
```