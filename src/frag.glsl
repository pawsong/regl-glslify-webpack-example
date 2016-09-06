precision mediump float;

#pragma glslify: lambert = require(glsl-diffuse-lambert)

uniform vec3 light;
varying vec3 vNormal;

void main() {
  float power = clamp(lambert(light, vNormal), 0.0, 1.0);
  gl_FragColor = vec4(power, power, power, 1.0);
}
