0.1.7 / 2015-11-15
==================
  * Added `.npmignore`

0.1.6 / 2014-09-02
==================
  * Move coverage to tests area to avoid confusing browserify

0.1.5 / 2014-07-10
==================
  * Documentation and coverage report release only

0.1.4 / 2012-10-26
==================
  * Efficiency improvements of variadic/array functions by manually looping
  (
    Previously used `reduce.call(arguments, binOp, init)` which is really nice
    But these functions are used everywhere..
  )

0.1.3 / 2012-06-29
==================
  * First good version outside `interlude`
  * Incorporates `log`/`pow` which used to be part of `autonomy` till now

