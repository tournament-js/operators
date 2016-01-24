var $ = require('..');
var test = require('bandage');

test('basic uncurried', function *(t) {
  t.eq($.plus2(2,1), 3, '2+1');
  t.eq($.plus3(3,2,1), 6, '3+2+1');
  t.eq($.plus4(4,3,2,1), 10, '4+3+2+1');

  t.eq($.times2(3,2), 6, '3*2');
  t.eq($.times3(4,3,2), 24, '4*3*2');
  t.eq($.times4(5,4,3,2), 120, '5*4*3*2');

  t.eq($.and([1,1,1]), 1, 'and map true');
  t.eq($.and2(1,1), 1, '1 && 1');
  t.eq($.and3(1,0,1), 0, '1 && 0 && 1');
  t.eq($.and4(1,1,1,1), 1, '1 && 1 && 1 && 1');

  t.eq($.or([0,0,0]), 0, 'or map false');
  t.eq($.or2(0,1), 1, '0 || 1');
  t.eq($.or3(0,0,0), 0, '0 || 0 || 0');
  t.eq($.or4(0,0,0,1), 1, '0 || 0 || 0 || 1');

  // made full and/or tests for some reason
  t.eq($.and2(false, false), false, 'false && false === false');
  t.eq($.and2(true, false), false, 'true && false === false');
  t.eq($.and2(false, true), false, 'false && true === false');
  t.eq($.and2(true, true), true, 'true && true === true');
  t.eq($.or2(false, false), false, 'false || false === false');
  t.eq($.or2(true, false), true, 'true || false === true');
  t.eq($.or2(false, true), true, 'false || true === true');
  t.eq($.or2(true, true), true, 'true || true === true');

  t.eq($.prepend2([1,2], [3]), [3,1,2], 'prepend2([1, 2], [3]) === [3,1,2]');
  t.eq($.append2([1,2], [3]), [1,2,3], 'prepend2([1, 2], [3]) === [1,2,3]');
  t.eq($.append3([1,2], [3], [4,5]), [1,2,3,4,5], 'prepend3([1,2], [3], [4,5]) === [1,2,3,4,5]');
  t.eq($.append4([1], [2], [[3]], [4]), [1,2,[3],4], 'prepend3([1],[2],[[3]],[4]) === [1,2,[3],4]');

  // non associative bunch
  t.eq($.minus2(3,2), 1, '3-2 === 1');
  t.eq($.divide2(9,3), 3, '9/3 === 3');
  t.eq($.div2(7,2), 3, '7 div 2 === 3');
  t.eq($.mod2(12,5), 2, '12 mod 5 === 2');

  t.eq($.pow2(2, 3), 8, '2^3 === 8');
  t.eq($.pow2(3, 0), 1, '3^0 === 1');
  t.eq($.pow2(4, 2), 16, '4^2 === 16');
  t.eq($.log2(16, 2), 4, '4 is log2 of 16');
  t.eq($.log2(100, 10), 2, '2 is log10 of 1000');

  t.eq($.eq2(1,1), true, '1 === 1');
  t.eq($.eq2(1,'1'), false, '1 === "1"');
  t.eq($.neq2(1,1), false, '!(1 !== 1)');
  t.eq($.neq2(1,2), true, '(1 !== 2)');
  t.eq($.gt2(3,2), true, '3 > 2');
  t.eq($.gt2(3,3), false, '3 ! > 2');
  t.eq($.lt2(2,3), true, '2 < 3');
  t.eq($.lt2(3,3), false, '3 ! < 3');
  t.eq($.gte2(3,3), true, '3 >= 3');
  t.eq($.gte2(2,3), false, '2 ! >= 3');
  t.eq($.lte2(2,2), true, '2 <= 2');
  t.eq($.lte2(2,1), false, '2 ! <= 1');
});

test('curried', function *(t) {
  t.eq($.plus(3)(2), 5, '2+3 === 5');
  t.eq($.minus(3)(5), 2, '5-3 === 2');
  t.eq($.times(2)(3), 6, '2*3 === 6');
  t.eq($.divide(2)(6), 3, '6/2 === 3');
  t.eq($.div(2)(7), 3, '7 div 2 === 3');
  t.eq($.mod(5)(11), 1, '11 mod 5 === 1');

  t.eq($.pow(3)(2), 8, '2^3 === 8');
  t.eq($.pow(0)(3), 1, '3^0 === 1');
  t.eq($.pow(2)(4), 16, '4^2 === 16');
  t.eq($.log(2)(16), 4, '4 is log2 of 16');
  t.eq($.log(10)(100), 2, '2 is log10 of 1000');

  t.deepEqual($.append([1,2])([3]), [3,1,2], '(++[1, 2]) [3] === [3, 1, 2]');
  t.deepEqual($.prepend([1,2])([3]), [1,2,3], '([1, 2]++) [3] === [1, 2, 3]');

  t.eq($.gt(5)(5), false, '5 ! > 5');
  t.eq($.gt(5)(6), true, '6 > 5');
  t.eq($.gt(5)(4), false, '4 ! > 5');

  t.eq($.gte(5)(5), true, '5 >= 5');
  t.eq($.gte(5)(6), true, '6 >= 5');
  t.eq($.gte(5)(4), false, '4 ! >= 5');

  t.eq($.lt(5)(5), false, '5 ! < 5');
  t.eq($.lt(5)(6), false, '6 ! < 5');
  t.eq($.lt(5)(4), true, '4 < 5');

  t.eq($.lte(5)(5), true, '5 <= 5');
  t.eq($.lte(5)(6), false, '6 ! <= 5');
  t.eq($.lte(5)(4), true, '4 <= 5');

  t.eq($.eq(5)(5), true, '5 === 5');
  t.eq($.lt(5)('5'), false, '5 !== "5"');

  t.eq($.neq(4)(4), false, '!(4 !== 4)');
  t.eq($.neq(4)(5), true, '(4 !== 5)');
});

test('lifted', function *(t) {
  t.eq($.sum([1,2,3,4]), 10, 'sum [1,2,3,4] === 10');
  t.eq($.product([1,2,3,4]), 24, 'product [1,2,3,4] === 24');
  t.deepEqual($.flatten([ [1,2,3], [[4]], [5] ]), [1,2,3,[4],5], '$.flatten');
});
