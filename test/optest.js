var $ = require(process.env.OPERATORS_COV ? '../operators-cov.js' : '../');

exports.basicUncurried = function (t) {
  t.eql = t.deepEqual;

  t.equal($.plus2(2,1), 3, "2+1");
  t.equal($.plus3(3,2,1), 6, "3+2+1");
  t.equal($.plus4(4,3,2,1), 10, "4+3+2+1");

  t.equal($.times2(3,2), 6, "3*2");
  t.equal($.times3(4,3,2), 24, "4*3*2");
  t.equal($.times4(5,4,3,2), 120, "5*4*3*2");

  t.equal($.and([1,1,1]), 1, "and map true");
  t.equal($.and2(1,1), 1, "1 && 1");
  t.equal($.and3(1,0,1), 0, "1 && 0 && 1");
  t.equal($.and4(1,1,1,1), 1, "1 && 1 && 1 && 1");

  t.equal($.or([0,0,0]), 0, "or map false");
  t.equal($.or2(0,1), 1, "0 || 1");
  t.equal($.or3(0,0,0), 0, "0 || 0 || 0");
  t.equal($.or4(0,0,0,1), 1, "0 || 0 || 0 || 1");

  // made full and/or tests for some reason
  t.equal($.and2(false, false), false, "false && false === false");
  t.equal($.and2(true, false), false, "true && false === false");
  t.equal($.and2(false, true), false, "false && true === false");
  t.equal($.and2(true, true), true, "true && true === true");
  t.equal($.or2(false, false), false, "false || false === false");
  t.equal($.or2(true, false), true, "true || false === true");
  t.equal($.or2(false, true), true, "false || true === true");
  t.equal($.or2(true, true), true, "true || true === true");

  t.eql($.prepend2([1,2], [3]), [3,1,2], "prepend2([1, 2], [3]) === [3,1,2]");
  t.eql($.append2([1,2], [3]), [1,2,3], "prepend2([1, 2], [3]) === [1,2,3]");
  t.eql($.append3([1,2], [3], [4,5]), [1,2,3,4,5], "prepend3([1,2], [3], [4,5]) === [1,2,3,4,5]");
  t.eql($.append4([1], [2], [[3]], [4]), [1,2,[3],4], "prepend3([1],[2],[[3]],[4]) === [1,2,[3],4]");

  // non associative bunch
  t.equal($.minus2(3,2), 1, "3-2 === 1");
  t.equal($.divide2(9,3), 3, "9/3 === 3");
  t.equal($.div2(7,2), 3, "7 div 2 === 3");
  t.equal($.mod2(12,5), 2, "12 mod 5 === 2");

  t.equal($.pow2(2, 3), 8, "2^3 === 8");
  t.equal($.pow2(3, 0), 1, "3^0 === 1");
  t.equal($.pow2(4, 2), 16, "4^2 === 16");
  t.equal($.log2(16, 2), 4, "4 is log2 of 16");
  t.equal($.log2(100, 10), 2, "2 is log10 of 1000");

  t.equal($.eq2(1,1), true, "1 === 1");
  t.equal($.eq2(1,"1"), false, "1 === '1'");
  t.equal($.neq2(1,1), false, "!(1 !== 1)");
  t.equal($.neq2(1,2), true, "(1 !== 2)");
  t.equal($.gt2(3,2), true, "3 > 2");
  t.equal($.gt2(3,3), false, "3 ! > 2");
  t.equal($.lt2(2,3), true, "2 < 3");
  t.equal($.lt2(3,3), false, "3 ! < 3");
  t.equal($.gte2(3,3), true, "3 >= 3");
  t.equal($.gte2(2,3), false, "2 ! >= 3");
  t.equal($.lte2(2,2), true, "2 <= 2");
  t.equal($.lte2(2,1), false, "2 ! <= 1");
  t.done();
};

exports.curried = function (t) {
  t.equal($.plus(3)(2), 5, "2+3 === 5");
  t.equal($.minus(3)(5), 2, "5-3 === 2");
  t.equal($.times(2)(3), 6, "2*3 === 6");
  t.equal($.divide(2)(6), 3, "6/2 === 3");
  t.equal($.div(2)(7), 3, "7 div 2 === 3");
  t.equal($.mod(5)(11), 1, "11 mod 5 === 1");

  t.equal($.pow(3)(2), 8, "2^3 === 8");
  t.equal($.pow(0)(3), 1, "3^0 === 1");
  t.equal($.pow(2)(4), 16, "4^2 === 16");
  t.equal($.log(2)(16), 4, "4 is log2 of 16");
  t.equal($.log(10)(100), 2, "2 is log10 of 1000");

  t.deepEqual($.append([1,2])([3]), [3,1,2], "(++[1, 2]) [3] === [3, 1, 2]");
  t.deepEqual($.prepend([1,2])([3]), [1,2,3], "([1, 2]++) [3] === [1, 2, 3]");

  t.equal($.gt(5)(5), false, "5 ! > 5");
  t.equal($.gt(5)(6), true, "6 > 5");
  t.equal($.gt(5)(4), false, "4 ! > 5");

  t.equal($.gte(5)(5), true, "5 >= 5");
  t.equal($.gte(5)(6), true, "6 >= 5");
  t.equal($.gte(5)(4), false, "4 ! >= 5");

  t.equal($.lt(5)(5), false, "5 ! < 5");
  t.equal($.lt(5)(6), false, "6 ! < 5");
  t.equal($.lt(5)(4), true, "4 < 5");

  t.equal($.lte(5)(5), true, "5 <= 5");
  t.equal($.lte(5)(6), false, "6 ! <= 5");
  t.equal($.lte(5)(4), true, "4 <= 5");

  t.equal($.eq(5)(5), true, "5 === 5");
  t.equal($.lt(5)('5'), false, "5 !== '5'");

  t.equal($.neq(4)(4), false, "!(4 !== 4)");
  t.equal($.neq(4)(5), true, "(4 !== 5)");
  t.done();
};

exports.lifted = function (t) {
  t.equal($.sum([1,2,3,4]), 10, "sum [1,2,3,4] === 10");
  t.equal($.product([1,2,3,4]), 24, "product [1,2,3,4] === 24");
  t.deepEqual($.flatten([ [1,2,3], [[4]], [5] ]), [1,2,3,[4],5], "$.flatten");

  t.equal($.add(1,2,3,4), 10, "add(1,2,3,4) === 10");
  t.equal($.multiply(1,2,3,4), 24, "multiply(1,2,3,4) === 24");
  t.deepEqual($.concat([1,2,3], [[4]], [5]), [1,2,3,[4],5], "$.concat");
  t.done();
};
