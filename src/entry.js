/*
  tags: basic

  <p> This example shows how to draw a mesh with regl </p>
*/
const regl = require('regl')()
const mat4 = require('gl-mat4')
const normals = require('angle-normals')
const bunny = require('bunny')

const drawBunny = regl({
  vert: require('raw!glslify!./vert.glsl'),

  frag: require('raw!glslify!./frag.glsl'),

  // this converts the vertices of the mesh into the position attribute
  attributes: {
    position: bunny.positions,
    normal: normals(bunny.cells, bunny.positions)
  },

  // and this converts the faces fo the mesh into elements
  elements: bunny.cells,

  uniforms: {
    light: [-0.5, -1, 1.5],
    model: mat4.identity([]),
    view: ({tick}) => {
      const t = 0.01 * tick
      return mat4.lookAt([],
        [30 * Math.cos(t), 2.5, 30 * Math.sin(t)],
        [0, 2.5, 0],
        [0, 1, 0])
    },
    projection: ({viewportWidth, viewportHeight}) =>
      mat4.perspective([],
        Math.PI / 4,
        viewportWidth / viewportHeight,
        0.01,
        1000)
  }
})

regl.frame(() => {
  regl.clear({
    depth: 1,
    color: [0, 0, 0, 1]
  })

  drawBunny()
})
