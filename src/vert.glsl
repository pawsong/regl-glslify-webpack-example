precision mediump float;
attribute vec3 position, normal;
uniform mat4 model, view, projection;
varying vec3 vNormal;

vec3 transformDirection(in vec3 dir, in mat4 matrix) {
  return normalize((matrix * vec4(dir, 0.0)).xyz);
}

void main() {
  vNormal = transformDirection(normal, view);
  gl_Position = projection * view * model * vec4(position, 1);
}
