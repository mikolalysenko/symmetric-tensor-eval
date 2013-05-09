"use strict"

var evl = require("../eval.js")

require("tap").test("symmetric-tensor-eval", function(t) {

  t.equals(evl(2, 2, [1, 1, 1], [1, 2]), 9)

  t.end()
})