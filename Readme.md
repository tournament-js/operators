# Operators ![travis build status](https://secure.travis-ci.org/clux/operators.png)
Operators provides the JavaScript operators as functions. It provides a standard quick and
easy to remember interface for addition, multiplication, concatenation, and-ing, or-ing, as
well as several two parameter lambdas for non-associative operators, and 1 - 1 curried
versions of all for quick creation of the functions that you end up writing for `filter` all
the time.

## Usage
Attach it to the short variable of choice:

````javascript
var $ = require('operators');
````

It is recommended to get it with the larger utility library:
[interlude](https://github.com/clux/interlude) for which it was made.

```javascript
[1,3,2,6,5,4].filter($.gt(4));
// [ 6, 5 ]

[1,2,3,4].map($.plus(1)); // [ 2, 3, 4, 5 ]

[1,3,2].filter($.eq(2)); // [ 2 ]

[ [1,2], [3,4] ].map($.prepend([0])); // [ [ 0, 1, 2 ], [ 0, 3, 4 ] ]
````

Read the [API](https://github.com/clux/operators/blob/master/api.md)

## Installation

````bash
$ npm install operators
````

## Running tests
Install development dependencies

````bash
$ npm install
````

Run the tests

````bash
$ npm test
````

## License
MIT-Licensed. See LICENSE file for details.
