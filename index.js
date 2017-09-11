var glsl = require('glslify');

console.log(glsl(`
  precision mediump float;

  #pragma glslify: ones = require(./ones.glsl)

  void main () {
    gl_FragColor = ones();
  }
`));
