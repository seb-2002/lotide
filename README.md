A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @seb-2002/lotide`

**Require it:**

`const _ = require('@seb-2002/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:


* `countLetters(string)` : countLetters takes a string and returns an object in which each letter appearing in the string is a key and a count is the value. 
* `eqArrays(arr1, arr2)`: This function compares arrays and returns a boolean value if they are equivalent.
* `countOnly(arr, object)`: countOnly js take an array and an object. It searches for each instance of a key with a truthy value in the object which appears in the array and outputs a new object with the count of each key.
* `eqObjects (obj1, obj2)`: Compares two objects and returns a boolean (not good for nested objects). 
* `findKey (obj, callback)`: Returns the first key in the object for which the value comes back true. 
* `findKeyByValue(obj, searchItem)`: If there are keys which correspond to the value of searchItem, it returns an a array of keys. If there is only one key in the array, it returns the value of array[0]. If there are no matching keys, it returns "No keys for that value".
* `flatten(array)`: Flattens a nested array (only good for one layer of nesting).
* `head(array)`: Returns the first element of an array. 
* `letterPositions(string)`:  Takes a string and returns an object where each letter in the string is a key and an array of its indices is the value.
* `map (array, callback)`: Transforms each element of the array according to the callback.
* `middle(array)`: Returns an array of the middle element(s) of an array. 
* `tail(array)`: Returns the array without the first element.
* `takeUntil(array, callback)`: Pushes the array elements to a new array until the callback returns true. 
* `without(array, removalArray) `:  Outputs a new array with only those items in source which were not in itemsToRemove (source WITHOUT itemsToRemove).