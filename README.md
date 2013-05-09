# symmetric-tensor-eval
Evaluates a symmetric tensor at a given vector.

## Example

## Install

    npm install symmetric-tensor-eval
    
### `require("symmetric-tensor-eval")(dimension, rank, coeffs, x)`
Evaluates a multivariable polynomial at the point x

* `dimension` is the dimension of the underlying vector space
* `rank` is the rank of the tensor
* `coeffs` is the array of tensor coefficients
* `x` is the point to evaluate the tensor at

**Returns** The value of the symmetric tensor at `x * x * x ...`

## Credits
(c) 2013 Mikola Lysenko. MIT License