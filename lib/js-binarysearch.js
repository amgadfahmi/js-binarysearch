/*global error */
'use strict';

var BS = function(array) {
    if (array) {
        this.internalArray = array;
    } else {
        throw new error('Object is not defined');
    }
    return this;
};

BS.prototype.search = function(target, key) {
    if (key && typeof key === 'string') {
        return this.searchObj(target, key);
    } else if (typeof key === 'function') {
        return this.searchCustom(target, key);
    } else if (typeof target === 'number') {
        return this.searchNum(target);
    } else if (typeof target === 'string') {
        return this.searchStr(target);
    }
};

BS.prototype.searchNum = function(target) {
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

/*
* @param iterator(item, target) => (1 || 0 || -1)
*/
BS.prototype.searchCustom = function(target, iterator) {
    var min = 0,
        max = this.internalArray.length - 1,
        temp, mid;
    while (min <= max) {
        mid = Math.round(min + (max - min) / 2);
        temp = iterator(this.internalArray[mid], target);
        if (temp === 0) { // temp match to target
            return this.internalArray[mid];
        } else if (temp > 0) {
            min = mid + 1;
        } else {
            max = mid - 1;
        }
    }
};

BS.prototype.sort = function(key) {
    if (this.internalArray.length <= 1) {
        return;
    }
    var isObject = key && typeof key === 'string';
    var isNumber = typeof this.internalArray[0] === 'number';
    if (isObject) {
        this.sortObj(key);
        return this;
    } else if (isNumber) {
        this.sortNum();
        return this;
    } else {
        this.internalArray.sort();
        return this;
    }
};

BS.prototype.sortObj = function(key) {
    var isString = typeof this.internalArray[0][key] === 'string';
    if (isString) {
        this.internalArray.sort(function(a, b) {
            return a[key].localeCompare(b[key]);
        });
    } else {
        this.internalArray.sort(function(a, b) {
            return a[key] - b[key];
        });
    }
};

BS.prototype.sortNum = function() {
    this.internalArray.sort(function(a, b) {
        return a - b;
    });
};
