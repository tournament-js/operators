# Operators
[![npm status](http://img.shields.io/npm/v/operators.svg)](https://www.npmjs.org/package/operators)
[![build status](https://secure.travis-ci.org/clux/operators.svg)](http://travis-ci.org/clux/operators)
[![dependency status](https://david-dm.org/clux/operators.svg)](https://david-dm.org/clux/operators)
[![coverage status](http://img.shields.io/coveralls/clux/operators.svg)](https://coveralls.io/r/clux/operators)

Operators provides the JavaScript operators as functions. It provides a standard, short,
and easy to remember interface for addition, multiplication, concatenation, and-ing, or-ing, as well as several two parameter lambdas for non-associative operators, and curried
versions of the binary operators for quick creation of the functions that you end up writing for `map` and `filter` *all the time*.

## Usage
Use it with qualified imports with the yet unfinished module `import` syntax or attach it to the short variable of choice. For selling points, here's how it will look with ES7 modules.

```js
import { gt, plus, pow, eq, prepend } from 'operators'

[1,3,2,6,5,4].filter(gt(4));
// [ 6, 5 ]

[1,2,3,4].map(plus(1)); // [ 2, 3, 4, 5 ]

[1,2,3,4].map(pow(2)); // [ 1, 4, 9, 16 ]

[1,2,3,2].filter(eq(2)); // [ 2, 2 ]

[ [1,2], [3,4] ].map(prepend([0])); // [ [ 0, 1, 2 ], [ 0, 3, 4 ] ]
```

Read the [API](https://github.com/clux/operators/blob/master/api.md).

This modules makes is a core part the larger utility library [interlude](https://github.com/clux/interlude).

## License
MIT-Licensed. See LICENSE file for details.
