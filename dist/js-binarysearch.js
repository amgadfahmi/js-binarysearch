/*! js-binarysearch - v1.0.0
 *  Release on: 2016-05-26
 *  Copyright (c) 2016 Amgad Fahmi
 *  Licensed MIT */
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    define([], function () {
      return (factory());
    });
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    factory();
  }
}(this, function () {

'use strict';

var BS = function (array) {
    if (array) {
        this.internalArray = array;
    } else {
        throw new error('Object is not defined');
    }
};

BS.prototype.search = function(target, key) {
    if (key) {
        return this.searchObj(target, key);
    } else if (typeof target === 'number') {
        return this.searchNum(target);
    } else if (typeof target === 'string') {
        return this.searchStr(target);
    }
};

BS.prototype.searchNum = function(target) {
    var min = this.internalArray[0],
        max = this.internalArray[this.internalArray.length - 1],
        mid;
    while (min <= max) {
        mid = Math.round(min + (max - min) / 2);
        if (this.internalArray[mid] === target) {
            return this.internalArray[mid];
        } else if (this.internalArray[mid] < target) {
            min = mid + 1;
        } else {
            max = mid - 1;
        }
    }
};

BS.prototype.searchStr = function(target) {
    var min = 0,
        max = this.internalArray.length - 1,
        mid;
    while (min <= max) {
        mid = Math.round(min + (max - min) / 2);
        if (this.internalArray[mid] === target) {
            return this.internalArray[mid];
        } else if (this.internalArray[mid] < target) {
            min = mid + 1;
        } else {
            max = mid - 1;
        }
    }
};

BS.prototype.searchObj = function(target, key) {
    var min = 0,
        max = this.internalArray.length - 1,
        temp, mid;
    while (min <= max) {
        mid = Math.round(min + (max - min) / 2);
        // temp =   this.internalArray[mid][key] ; 
        temp = this.internalArray[mid] ? this.internalArray[mid][key] : undefined;
        if (temp === target) {
            return this.internalArray[mid];
        } else if (temp < target) {
            min = mid + 1;
        } else {
            max = mid - 1;
        }
    }
};


}));
