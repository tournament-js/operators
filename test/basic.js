var a = require('assert')
  , $ = require('../');

exports['test#uncurried basic'] = function () {
  a.equal($.plus2(2,1), 3, "2+1");
  a.equal($.plus3(3,2,1), 6, "3+2+1");
  a.equal($.plus4(4,3,2,1), 10, "4+3+2+1");

  a.equal($.times2(3,2), 6, "3*2");
  a.equal($.times3(4,3,2), 24, "4*3*2");
  a.equal($.times4(5,4,3,2), 120, "5*4*3*2");

  a.equal($.and2(1,1), true, "1 && 1");
  a.equal($.and3(1,0,1), false, "1 && 0 && 1");
  a.equal($.and4(1,1,1,1), true, "1 && 1 && 1 && 1");

  a.equal($.or2(0,1), true, "0 || 1");
  a.equal($.or3(0,0,0), false, "0 || 0 || 0");
  a.equal($.or4(0,0,0,1), true, "0 || 0 || 0 || 1");

  // made full and/or tests for some reason
  a.equal($.and2(false, false), false, "false && false === false");
  a.equal($.and2(true, false), false, "true && false === false");
  a.equal($.and2(false, true), false, "false && true === false");
  a.equal($.and2(true, true), true, "true && true === true");
  a.equal($.or2(false, false), false, "false || false === false");
  a.equal($.or2(true, false), true, "true || false === true");
  a.equal($.or2(false, true), true, "false || true === true");
  a.equal($.or2(true, true), true, "true || true === true");


  a.eql($.prepend2([1,2], [3]), [3,1,2], "prepend2([1, 2], [3]) === [3,1,2]");
  a.eql($.append2([1,2], [3]), [1,2,3], "prepend2([1, 2], [3]) === [1,2,3]");
  a.eql($.append3([1,2], [3], [4,5]), [1,2,3,4,5], "prepend3([1,2], [3], [4,5]) === [1,2,3,4,5]");
  a.eql($.append4([1], [2], [[3]], [4]), [1,2,[3],4], "prepend3([1],[2],[[3]],[4]) === [1,2,[3],4]");


  // non associative bunch
  a.equal($.minus2(3,2), 1, "3-2 === 1");
  a.equal($.divide2(9,3), 3, "9/3 === 3");
  a.equal($.div2(7,2), 3, "7 div 2 === 3");
  a.equal($.mod2(12,5), 2, "12 mod 5 === 2");

  a.equal($.eq2(1,1), true, "1 === 1");
  a.equal($.eq2(1,"1"), false, "1 === '1'");
  a.equal($.neq2(1,1), false, "!(1 !== 1)");
  a.equal($.neq2(1,2), true, "(1 !== 2)");
  a.equal($.gt2(3,2), true, "3 > 2");
  a.equal($.gt2(3,3), false, "3 ! > 2");
  a.equal($.lt2(2,3), true, "2 < 3");
  a.equal($.lt2(3,3), false, "3 ! < 3");
  a.equal($.gte2(3,3), true, "3 >= 3");
  a.equal($.gte2(2,3), false, "2 ! >= 3");
  a.equal($.lte2(2,2), true, "2 <= 2");
  a.equal($.lte2(2,1), false, "2 ! <= 1");
};

exports['test#curried'] = function () {
  a.equal($.plus(3)(2), 5, "2+3 === 5");
  a.equal($.minus(3)(5), 2, "5-3 === 2");
  a.equal($.times(2)(3), 6, "2*3 === 6");
  a.equal($.divide(2)(6), 3, "6/2 === 3");
  a.equal($.div(2)(7), 3, "7 div 2 === 3");
  a.equal($.mod(5)(11), 1, "11 mod 5 === 1");
  a.eql($.append([1,2])([3]), [3,1,2], "(++[1, 2]) [3] === [3, 1, 2]");
  a.eql($.prepend([1,2])([3]), [1,2,3], "([1, 2]++) [3] === [1, 2, 3]");

  a.equal($.gt(5)(5), false, "5 ! > 5");
  a.equal($.gt(5)(6), true, "6 > 5");
  a.equal($.gt(5)(4), false, "4 ! > 5");

  a.equal($.gte(5)(5), true, "5 >= 5");
  a.equal($.gte(5)(6), true, "6 >= 5");
  a.equal($.gte(5)(4), false, "4 ! >= 5");

  a.equal($.lt(5)(5), false, "5 ! < 5");
  a.equal($.lt(5)(6), false, "6 ! < 5");
  a.equal($.lt(5)(4), true, "4 < 5");

  a.equal($.lte(5)(5), true, "5 <= 5");
  a.equal($.lte(5)(6), false, "6 ! <= 5");
  a.equal($.lte(5)(4), true, "4 <= 5");

  a.equal($.eq(5)(5), true, "5 === 5");
  a.equal($.lt(5)('5'), false, "5 !== '5'");

  a.equal($.neq(4)(4), false, "!(4 !== 4)");
  a.equal($.neq(4)(5), true, "(4 !== 5)");
};

exports['test#lifted'] = function () {
  a.equal($.sum([1,2,3,4]), 10, "sum [1,2,3,4] === 10");
  a.equal($.product([1,2,3,4]), 24, "product [1,2,3,4] === 24");
  a.eql($.flatten([ [1,2,3], [[4]], [5] ]), [1,2,3,[4],5], "$.flatten");

  a.equal($.add(1,2,3,4), 10, "add(1,2,3,4) === 10");
  a.equal($.multiply(1,2,3,4), 24, "multiply(1,2,3,4) === 24");
  a.eql($.concat([1,2,3], [[4]], [5]), [1,2,3,[4],5], "$.concat");
};
