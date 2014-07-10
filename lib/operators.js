var $ = {}
  , concat = Array.prototype.concat;

// multi-parameter versions for the associative operators:
$.plus2 = function (x, y) {
  return x + y;
};
$.plus3 = function (x, y, z) {
  return x + y + z;
};
$.plus4 = function (x, y, z, w) {
  return x + y + z + w;
};

$.times2 = function (x, y) {
  return x * y;
};
$.times3 = function (x, y, z) {
  return x * y * z;
};
$.times4 = function (x, y, z, w) {
  return x * y * z * w;
};

$.and2 = function (x, y) {
  return x && y;
};
$.and3 = function (x, y, z) {
  return x && y && z;
};
$.and4 = function (x, y, z, w) {
  return x && y && z && w;
};

$.or2 = function (x, y) {
  return x || y;
};
$.or3 = function (x, y, z) {
  return x || y || z;
};
$.or4 = function (x, y, z, w) {
  return x || y || z || w;
};

$.append2 = function (xs, ys) {
  return xs.concat(ys);
};
$.append3 = function (xs, ys, zs) {
  return xs.concat(ys, zs);
};
$.append4 = function (xs, ys, zs, ws) {
  return xs.concat(ys, zs, ws);
};
$.prepend2 = function (xs, ys) {
  return ys.concat(xs);
};

// Array versions of 5/6 associative operators by looping rather than reducing ops
// Associative reductions would make these functions one-liners..
// I.e. $.product = (xs) -> xs.reduce($.times2, 1)
// These abstractions are very much not free however, and are thus avoided for now:
// http://jsperf.com/reduce-vs-slicereduce3
$.sum = function (xs) {
  var sum = 0;
  for (var i = 0; i < xs.length; i += 1) {
    sum += xs[i];
  }
  return sum;
};

$.product = function (xs) {
  var product = 1;
  for (var i = 0, len = xs.length; i < len; i += 1) {
    product *= xs[i];
  }
  return product;
};

$.and = function (xs) {
  var and = true;
  for (var i = 0, len = xs.length; i < len; i += 1) {
    and = and && xs[i];
  }
  return and;
};

$.or = function (xs) {
  var or = false;
  for (var i = 0, len = xs.length; i < len; i += 1) {
    or = or || xs[i];
  }
  return or;
};

$.flatten = function (xs) {
  return concat.apply([], xs);
};

// variadic versions
$.add = function () {
  var sum = 0;
  for (var i = 0, len = arguments.length; i < len; i += 1) {
    sum += arguments[i];
  }
  return sum;
};

$.multiply = function () {
  var product = 1;
  for (var i = 0, len = arguments.length; i < len; i += 1) {
    product *= arguments[i];
  }
  return product;
};

$.concat = function () {
  return concat.apply([], arguments);
};

// non-associative operators only get the 2 argument version
$.minus2 = function (x, y) {
  return x - y;
};

$.divide2 = function (x, y) {
  return x / y;
};

$.div2 = function (x, y) {
  return Math.floor(x / y);
};

$.mod2 = function (x, y) {
  return x % y;
};

$.pow2 = Math.pow;

$.log2 = function (x, y) {
  return Math.log(x) / Math.log(y);
};

$.eq2 = function (x, y) {
  return x === y;
};

$.neq2 = function (x, y) {
  return x !== y;
};

$.gt2 = function (x, y) {
  return x > y;
};

$.lt2 = function (x, y) {
  return x < y;
};

$.gte2 = function (x, y) {
  return x >= y;
};

$.lte2 = function (x, y) {
  return x <= y;
};

// curried versions
$.plus = function (y) {
  return function (x) {
    return x + y;
  };
};

$.minus = function (y) {
  return function (x) {
    return x - y;
  };
};

$.times = function (y) {
  return function (x) {
    return x * y;
  };
};

$.divide = function (y) {
  return function (x) {
    return x / y;
  };
};

$.div = function (y) {
  return function (x) {
    return Math.floor(x / y);
  };
};

$.mod = function (y) {
  return function (x) {
    return x % y;
  };
};

$.pow = function (y) {
  return function (x) {
    return Math.pow(x, y);
  };
};

$.log = function (y) {
  return function (x) {
    return Math.log(x) / Math.log(y);
  };
};

$.append = function (ys) {
  return function (xs) {
    return xs.concat(ys);
  };
};

$.prepend = function (ys) {
  return function (xs) {
    return ys.concat(xs);
  };
};

$.gt = function (y) {
  return function (x) {
    return x > y;
  };
};

$.lt = function (y) {
  return function (x) {
    return x < y;
  };
};

$.eq = function (y) {
  return function (x) {
    return x === y;
  };
};

$.neq = function (y) {
  return function (x) {
    return x !== y;
  };
};

$.gte = function (y) {
  return function (x) {
    return x >= y;
  };
};

$.lte = function (y) {
  return function (x) {
    return x <= y;
  };
};

module.exports = $;
