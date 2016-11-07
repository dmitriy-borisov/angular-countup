# angular-countUp #

Lightweight plugin for AngularJS 1.5.x without any dependencies for smooth changing the scope numbers


## Installation ##

NPM:
```
npm install angular-countup --save
```

Include the file to your page after `angular`, like so:

```html
<head>
    <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.5.7/angular.min.js"></script>
    <script src="path_to_folder/angular-countup.min.js"></script>
</head>
```

Add the module name to your main app file, for example:

```javascript
angular.module('myApp', [
    ...
    'countUp'
])
```

## Usage ##

```html
<count-up ng-model="myvalue"></count-up>

```

`myvalue` is a `$scope.myvalue` in your controller

Additional attributes:

- `time` - total time of increase from old value to new value. Default 1000 (1 second);
- `steps` - frame count. Default 10;
- `decimals` - count of numbers after dot. Default 0;
- `before` - text before the value. Default: none;
- `after` - text after the value. Default: none;

## Demo ##
[JSFiddle](https://jsfiddle.net/DmitriyBorisov/ahub4sce/)
