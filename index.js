var glsl = require('glslify');

console.log(glsl(`
  precision mediump float;

  void main () {
    gl_FragColor = ones();
  }
`));
