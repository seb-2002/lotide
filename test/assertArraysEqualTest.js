const assertArraysEq = require('../assertArraysEqual');


let a = ['bear', 156, ':)', 'hello', 5678, -2];
let b = ['whattttttt', 666666]


assertArraysEq(a, a);
assertArraysEq(a, b);