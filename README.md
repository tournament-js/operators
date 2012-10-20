# Operators [![Build Status](https://secure.travis-ci.org/clux/operators.png)](http://travis-ci.org/clux/operators)
Operators provides the JavaScript operators as functions. It provides a standard, short,
and easy to remember interface for addition, multiplication, concatenation, and-ing, or-ing, as
well as several two parameter lambdas for non-associative operators, and curried
versions of the binary operators for quick creation of the functions that you end up writing for
`filter` *all the time*.

## Usage
Attach it to the short variable of choice:

```javascript
var $ = require('operators');
```

```javascript
[1,3,2,6,5,4].filter($.gt(4));
// [ 6, 5 ]

[1,2,3,4].map($.plus(1)); // [ 2, 3, 4, 5 ]

[1,2,3,4].map($.pow(2)); // [ 1, 4, 9, 16 ]

[1,2,3,2].filter($.eq(2)); // [ 2, 2 ]

[ [1,2], [3,4] ].map($.prepend([0])); // [ [ 0, 1, 2 ], [ 0, 3, 4 ] ]
```

Read the [API](https://github.com/clux/operators/blob/master/api.md).

We advocate using this module with one of the utility libraries it was made for:

- [autonomy](https://github.com/clux/autonomy) a super-lightweight utility library
- [interlude](https://github.com/clux/interlude) a bigger utility library containing autonomy

But they will obviously work well by themselves.

## Installation

```bash
$ npm install operators
```

## Running tests
Install development dependencies

```bash
$ npm install
```

Run the tests

```bash
$ npm test
```

## License
MIT-Licensed. See LICENSE file for details.
