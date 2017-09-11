var glsl = require('glslify');

console.log(glsl(`
  precision mediump float;

  #pragma glslify: ones = require(./ones)

  void main () {
    gl_FragColor = vec4(1.0);
  }
`));
