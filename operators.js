var $ = {};

// multi-parameter versions for the associative operators
$.plus2 = (x, y) => x + y;
$.plus3 = (x, y, z) => x + y + z;
$.plus4 = (x, y, z, w) => x + y + z + w;
$.times2 = (x, y) => x * y;
$.times3 = (x, y, z) => x * y * z;
$.times4 = (x, y, z, w) => x * y * z * w;
$.and2 = (x, y) => x && y;
$.and3 = (x, y, z) => x && y && z;
$.and4 = (x, y, z, w) => x && y && z && w;
$.or2 = (x, y) => x || y;
$.or3 = (x, y, z) => x || y || z;
$.or4 = (x, y, z, w) => x || y || z || w;

// same, but on arrays
$.append2 = (xs, ys) => xs.concat(ys);
$.append3 = (xs, ys, zs) => xs.concat(ys, zs);
$.append4 = (xs, ys, zs, ws) => xs.concat(ys, zs, ws);
$.prepend2 = (xs, ys) => ys.concat(xs);

$.sum = (xs) => xs.reduce((acc, el) => acc + el, 0);
$.product = (xs) => xs.reduce((acc, el) => acc * el, 1);
$.and = (xs) => xs.reduce((acc, el) => acc && el, true);
$.or = (xs) => xs.reduce((acc, el) => acc || el, false);
$.flatten = (xs) => Array.prototype.concat.apply([], xs);

// non-associative operators only get the 2 argument version
$.minus2 = (x, y) => x - y;
$.divide2 = (x, y) => x / y;
$.div2 = (x, y) => Math.floor(x / y);
$.mod2 = (x, y) => x % y;
$.pow2 = Math.pow;
$.log2 = (x, y) => Math.log(x) / Math.log(y);
$.eq2 = (x, y) => x === y;
$.neq2 = (x, y) => x !== y;
$.gt2 = (x, y) => x > y;
$.lt2 = (x, y) => x < y;
$.gte2 = (x, y) => x >= y;
$.lte2 = (x, y) => x <= y;

// curried versions
$.plus = (y) => (x) => x + y;
$.minus = (y) => (x) => x - y;
$.times = (y) => (x) => x * y;
$.divide = (y) => (x) => x / y;
$.div = (y) => (x) => Math.floor(x / y);
$.mod = (y) => (x) => x % y;
$.pow = (y) => (x) => Math.pow(x, y);
$.log = (y) => (x) => Math.log(x) / Math.log(y);
$.append = (ys) => (xs) => xs.concat(ys);
$.prepend = (ys) => (xs) => ys.concat(xs);
$.gt = (y) => (x) => x > y;
$.lt = (y) => (x) => x < y;
$.eq = (y) => (x) => x === y;
$.neq = (y) => (x) => x !== y;
$.gte = (y) => (x) => x >= y;
$.lte = (y) => (x) => x <= y;

module.exports = $;
