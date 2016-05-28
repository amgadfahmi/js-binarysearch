# JS-BinarySearch 
[![Build Status](https://travis-ci.org/amgadfahmi/js-binarysearch.svg?branch=master)](https://travis-ci.org/amgadfahmi/js-binarysearch)

Binary search algorithm implementation in Javascript without any dependency.

![alt text](https://amgadfahmi.files.wordpress.com/2016/05/binarysearch1.jpg "Javascript Binary Search")


## Installation

You can install the package using NPM 
```
$ npm install --save-dev js-binarysearch
```
Using bower
```
$ bower install --save js-binarysearch
```

## Usage
The liberary can be used to search any numeric, string and object sorted array
```javascript
var arrNum = [];
for (var i = 0; i < 10000; i++) {
    arrNum.push(i + 1);
}
var result = new BS(arrNum).search(9999);
console.log(result) //output is 9999
```
Node example 
```javascript
var BS = require("js-binarysearch");
var result = new BS([22,3,55,987,67]).sort().search(55);
console.log(result) //output is 55
```

## Comparison with Linear search 
Knowing when to use any of both algorithms is important, as its known that binary search is faster in small array size. The strength of binary search comes with huge data. I have created a small test page to show the execution difference between binary vs linear.
> Please not this is assuming its a sorted array and the item we are looking for is the last one. 

![alt text](https://amgadfahmi.files.wordpress.com/2016/05/screenshot-19.png "Binary Search vs Linear Search")

```
Download the project and double click the dist/test.html 
```
1. The page let you control the size of the array (iterations = array size)
2. Every refresh click will perform 2 search commands (linear & binary) and keep the execution time in global array in order to display it later on the chart. 
3. The loop button will perform a complete test (As refresh button was clicked) every 3 seconds (click one more time to stop the loop)
4. By default the test runs againts numeric, string and object arrays. If you want to perform only one of these or combination, check/unckeck the boxes. 
5. You can click on the chart different legend items to show/hide lines. 

Perform test by yourself from [here](http://bit.ly/binaryvslinear)

## API
The liberary can be used to search array of numbers, strings and objects. All what is needed to take new instance from the BS class passing the array you want to search in the constructor. 
The search function has 2 overloads:
1. The target value in case of numeric and string arrays 
2. Value and key in case of the object as following:
```javascript
new BS(arrObj).search('20380a36-8777-43f7-a79e-65bdb53f4621', 'guid');
```
## Sorting 
Now you can sort the array in chaining mechanism. 
```javascript
new BS([3,1,66,33,890,24]).sort().search(66); //output is 66 
//or 
var arr = [{id:33, name:'Jasmin'},{id:12, name:'David'},{id:7, name:'Amgad'},{id:56, name:'Katya'}];
new BS(arr).sort('id').search(7,'id'); //output is {id:7, name:'Amgad'}
new BS(arr).sort('name').search('Katya','name'); //output is {id:56, name:'Katya'}

```
## License

The MIT License (MIT)

Copyright (c) 2016 Amgad Fahmi

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.