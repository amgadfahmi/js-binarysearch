# JS-BinarySearch 
Master 1.0.2: [![Build Status](https://travis-ci.org/amgadfahmi/js-binarysearch.svg?branch=master)](https://travis-ci.org/amgadfahmi/js-binarysearch)

Binary search algorithm implementation in Javascript without any dependency.

![alt text](https://amgadfahmi.files.wordpress.com/2016/05/binarysearch1.jpg "Javascript Binary Search")

[![NPM](https://nodei.co/npm/js-binarysearch.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/js-binarysearch/)&nbsp;&nbsp;&nbsp; [![npm](data:image/png;base64,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 "Javascript Binary Search")](http://bower.io/search/?q=js-binarysearch)

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