"use strict"

var bits = require("bit-twiddle")
var sym = require("symmetric-tensor-index")
var multi = require("multinomial")

var SEQ = new Uint32Array(128)
var DEG = new Uint32Array(128)

function evalSymmetricTensor(dimension, rank, coeffs, x) {
  if(SEQ.length < rank) {
    SEQ = new Uint32Array(bits.nextPow2(rank))
  }
  if(DEG.length < dimension) {
    DEG = new Uint32Array(bits.nextPow2(dimension))
  }
  var i
  for(i=0; i<rank; ++i) {
    SEQ[i] = 0
  }
  var idx = 0, result = 0.0, p
  while(idx >= 0) {
    sym.tensorToDegree(dimension, rank, SEQ, DEG)
    p = 1.0
    for(i=0; i<dimension; ++i) {
      p *= Math.pow(x[i], DEG[i])
    }
    result += coeffs[idx] * multi(DEG) * p
    idx = sym.nextTensor(dimension, rank, SEQ, idx)
  }
  return result
}
module.exports = evalSymmetricTensor
