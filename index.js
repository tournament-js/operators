module.exports = process.env.OPERATORS_COV
  ? require('./lib-cov/operators.js')
  : require('./lib/operators.js');
