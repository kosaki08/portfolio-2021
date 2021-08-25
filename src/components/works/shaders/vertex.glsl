uniform vec2 uMousePosition;
varying vec2 vUv;

void main() {
  vec3 newPosition = position;
  newPosition.x -= uMousePosition.x * 0.01;
  newPosition.y -= uMousePosition.y * 0.01;
  float dist = distance(position.xy, uMousePosition.xy);
  newPosition.z += dist * 0.5;
  
  gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);

  vUv = uv;
}
