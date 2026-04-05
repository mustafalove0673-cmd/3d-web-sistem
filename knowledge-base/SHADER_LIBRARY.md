# 🎨 SHADER KOD KÜTÜPHANESİ v1.0

> Hazır GLSL shader snippet'leri — Three.js, WebGL, R3F ile uyumlu
> Her shader doğrudan projeye kopyalanıp kullanılabilir

---

## 📋 İÇİNDEKİLER

```
1. Gradient Mesh Shader      → Hero section arka plan
2. Noise Texture Shader      → Organik yüzey efekti
3. Glow/Bloom Shader         → Neon ışıma efekti
4. Glassmorphism Shader      → Cam efektli kartlar
5. Distortion Shader         → Hover saçılma efekti
6. Particle System Shader    → Parçacık sistemi
7. Water/Ocean Shader        → Su dalga efekti
8. Fire/Flame Shader         → Ateş parçacık efekti
9. Aurora Shader             → Kuzey ışığı efekti
10. Dissolve Shader          → Geçiş/dönüşüm efekti
11. Chromatic Aberration     → Renk sapma efekti
12. Vignette Shader          → Kenar karartma
13. God Rays Shader          → Işık demetleri
14. Film Grain Shader        → Film tanesi overlay
15. Warp/Portal Shader       → Uzay-zaman distortion
```

---

## 1. 🌈 GRADIENT MESH SHADER

**Kullanım:** Hero section, premium arka plan, landing page

```glsl
// Vertex Shader
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

// Fragment Shader
uniform float uTime;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
varying vec2 vUv;

// Simplex Noise
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

float snoise(vec2 v) {
  const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
  vec2 i  = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod289(i);
  vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m*m; m = m*m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
  vec3 g;
  g.x = a0.x * x0.x + h.x * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

void main() {
  float noise1 = snoise(vUv * 3.0 + uTime * 0.3) * 0.5 + 0.5;
  float noise2 = snoise(vUv * 5.0 - uTime * 0.2) * 0.5 + 0.5;
  
  vec3 color = mix(uColor1, uColor2, noise1);
  color = mix(color, uColor3, noise2 * 0.5);
  
  gl_FragColor = vec4(color, 1.0);
}
```

**React Three Fiber Kullanımı:**
```tsx
<Canvas>
  <mesh>
    <planeGeometry args={[10, 10]} />
    <shaderMaterial
      vertexShader={vertexShader}
      fragmentShader={fragmentShader}
      uniforms={{
        uTime: { value: 0 },
        uColor1: { value: new THREE.Color('#0a0a0f') },
        uColor2: { value: new THREE.Color('#c8506f') },
        uColor3: { value: new THREE.Color('#4a90d9') },
      }}
    />
  </mesh>
</Canvas>
```

---

## 2. 🔮 NOISE TEXTURE SHADER

**Kullanım:** Arka plan overlay, organik yüzeyler, premium efekt

```glsl
uniform float uTime;
uniform float uOpacity;
varying vec2 vUv;

float random(vec2 st) { return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123); }

float noise(vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);
  float a = random(i);
  float b = random(i + vec2(1.0, 0.0));
  float c = random(i + vec2(0.0, 1.0));
  float d = random(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(a, b, u.x) + (c - a)* u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}

float fbm(vec2 st) {
  float value = 0.0;
  float amplitude = 0.5;
  for (int i = 0; i < 5; i++) {
    value += amplitude * noise(st);
    st *= 2.0;
    amplitude *= 0.5;
  }
  return value;
}

void main() {
  vec2 uv = vUv;
  float n = fbm(uv * 4.0 + uTime * 0.1);
  gl_FragColor = vec4(vec3(n), uOpacity);
}
```

---

## 3. ✨ GLOW/BLOOM SHADER

**Kullanım:** Neon efekt, premium butonlar, parlayan elementler

```glsl
uniform vec3 uGlowColor;
uniform float uIntensity;
uniform float uRadius;
varying vec2 vUv;

void main() {
  float dist = distance(vUv, vec2(0.5));
  float glow = uIntensity * (1.0 - smoothstep(0.0, uRadius, dist));
  gl_FragColor = vec4(uGlowColor, glow);
}
```

**React Three Fiber Post-Processing ile:**
```tsx
import { EffectComposer, Bloom } from '@react-three/postprocessing'

<EffectComposer>
  <Bloom
    luminanceThreshold={0.2}
    luminanceSmoothing={0.9}
    intensity={1.5}
    mipmapBlur
  />
</EffectComposer>
```

---

## 4. 🪟 GLASSMORPHISM SHADER

**Kullanım:** Cam efektli kartlar, premium UI, blur background

```glsl
uniform float uBlurAmount;
uniform float uOpacity;
uniform vec3 uTintColor;
uniform float uFresnelPower;
varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vViewDir;

void main() {
  // Fresnel efekti - kenarlardan daha fazla yansıma
  float fresnel = pow(1.0 - abs(dot(vNormal, vViewDir)), uFresnelPower);
  
  // Renk karışımı
  vec3 color = uTintColor + fresnel * 0.3;
  float alpha = uOpacity + fresnel * 0.4;
  
  gl_FragColor = vec4(color, alpha);
}
```

**CSS Alternatifi (drei ile):**
```tsx
import { MeshTransmissionMaterial } from '@react-three/drei'

<mesh>
  <sphereGeometry args={[1, 64, 64]} />
  <MeshTransmissionMaterial
    backside
    samples={16}
    thickness={0.5}
    chromaticAberration={0.5}
    anisotropy={0.3}
    distortion={0.2}
    distortionScale={0.3}
    temporalDistortion={0.1}
    transmission={1}
    roughness={0.1}
  />
</mesh>
```

---

## 5. 🌀 DISTORTION SHADER (Hover Efekti)

**Kullanım:** Hover saçılma, mouse tracking efekt

```glsl
uniform float uTime;
uniform float uHover;
uniform vec2 uMouse;
varying vec2 vUv;

void main() {
  vec2 uv = vUv;
  vec2 center = vec2(0.5);
  
  float dist = distance(uv, center);
  float distortion = uHover * sin(dist * 10.0 - uTime * 3.0) * 0.05;
  
  uv += distortion;
  vec3 color = vec3(uv, 0.5 + 0.5 * sin(uTime));
  gl_FragColor = vec4(color, 1.0);
}
```

---

## 6. ✨ PARTICLE SYSTEM SHADER

**Kullanım:** Hero parçacıkları, dekoratif efekt, premium arka plan

```glsl
// Vertex
attribute float aScale;
attribute float aSpeed;
uniform float uTime;
varying float vAlpha;

void main() {
  vec3 pos = position;
  
  // Yüzen hareket
  pos.y += sin(uTime * aSpeed + position.x) * 0.5;
  pos.x += cos(uTime * aSpeed * 0.7 + position.z) * 0.3;
  
  // Alpha - uzaklık bazlı
  vAlpha = 0.3 + 0.7 * sin(uTime * aSpeed);
  
  vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
  gl_PointSize = aScale * (300.0 / -mvPosition.z);
  gl_Position = projectionMatrix * mvPosition;
}

// Fragment
varying float vAlpha;
uniform vec3 uColor;

void main() {
  // Yuvarlak parçacık
  float dist = length(gl_PointCoord - vec2(0.5));
  if (dist > 0.5) discard;
  
  float alpha = smoothstep(0.5, 0.0, dist) * vAlpha;
  gl_FragColor = vec4(uColor, alpha);
}
```

---

## 7. 🌊 WATER/OCEAN SHADER

**Kullanım:** Deniz temalı siteler, su efekti, lüks yachting

```glsl
uniform float uTime;
uniform float uWaveHeight;
uniform float uWaveFrequency;
varying vec2 vUv;

void main() {
  vec2 uv = vUv;
  
  float wave1 = sin(uv.x * uWaveFrequency + uTime) * cos(uv.y * uWaveFrequency * 0.8 + uTime * 0.6) * uWaveHeight;
  float wave2 = sin(uv.x * uWaveFrequency * 1.5 + uTime * 1.3) * cos(uv.y * uWaveFrequency * 1.2 + uTime * 0.9) * uWaveHeight * 0.5;
  
  float wave = wave1 + wave2;
  
  vec3 deepColor = vec3(0.0, 0.1, 0.3);
  vec3 surfaceColor = vec3(0.0, 0.4, 0.6);
  vec3 foamColor = vec3(0.8, 0.9, 1.0);
  
  vec3 color = mix(deepColor, surfaceColor, wave * 2.0 + 0.5);
  color = mix(color, foamColor, smoothstep(0.4, 0.6, wave));
  
  gl_FragColor = vec4(color, 0.9);
}
```

---

## 8. 🔥 FIRE/FLAME SHADER

**Kullanım:** Dramatik efekt, restaurant, enerji sektörü

```glsl
uniform float uTime;
varying vec2 vUv;

float noise(vec2 p) {
  return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
}

float fbm(vec2 p) {
  float f = 0.0;
  float w = 0.5;
  for (int i = 0; i < 5; i++) {
    f += w * noise(p);
    p *= 2.0;
    w *= 0.5;
  }
  return f;
}

void main() {
  vec2 uv = vUv;
  uv.y -= uTime * 0.5; // Yukarı hareket
  
  float flame = fbm(uv * 4.0);
  flame = pow(flame, 1.5);
  
  vec3 innerColor = vec3(1.0, 1.0, 0.8);  // Beyaz-sarı merkez
  vec3 midColor = vec3(1.0, 0.5, 0.0);    // Turuncu orta
  vec3 outerColor = vec3(0.8, 0.1, 0.0);  // Kırmızı kenar
  
  vec3 color = mix(outerColor, midColor, flame);
  color = mix(color, innerColor, pow(flame, 2.0));
  
  float alpha = smoothstep(0.0, 0.3, flame) * (1.0 - uv.y);
  gl_FragColor = vec4(color, alpha);
}
```

---

## 9. 🌌 AURORA SHADER

**Kullanım:** Kuzey ışığı efekti, doğa temalı, premium arka plan

```glsl
uniform float uTime;
uniform vec3 uColor1;
uniform vec3 uColor2;
varying vec2 vUv;

void main() {
  vec2 uv = vUv;
  
  float wave = sin(uv.x * 3.0 + uTime * 0.5) * 0.3 + 0.5;
  wave *= sin(uv.y * 2.0 + uTime * 0.3) * 0.5 + 0.5;
  
  float aurora = wave * smoothstep(0.3, 0.7, uv.y);
  
  vec3 color = mix(uColor1, uColor2, uv.x + sin(uTime * 0.2) * 0.3);
  
  float alpha = aurora * 0.6 * smoothstep(0.0, 0.2, uv.y) * smoothstep(1.0, 0.5, uv.y);
  
  gl_FragColor = vec4(color, alpha);
}
```

---

## 10. 💫 DISSOLVE SHADER

**Kullanım:** Sayfa geçişleri, bölüm animasyonları, scroll efekt

```glsl
uniform float uTime;
uniform float uProgress; // 0.0 → 1.0
uniform float uEdgeWidth;
uniform vec3 uEdgeColor;
varying vec2 vUv;

float random(vec2 co) { return fract(sin(dot(co, vec2(12.9898,78.233))) * 43758.5); }

void main() {
  float noise = random(floor(vUv * 50.0));
  
  float edge = smoothstep(uProgress - uEdgeWidth, uProgress, noise) -
               smoothstep(uProgress, uProgress + uEdgeWidth, noise);
  
  vec3 color = uEdgeColor * edge;
  float alpha = step(uProgress, noise);
  
  gl_FragColor = vec4(color, 1.0 - alpha + edge);
}
```

---

## 11. 🎯 CHROMATIC ABERRATION (Renk Sapması)

**Kullanım:** Kamera efekti, sanatsal, premium

```tsx
// Post-processing ile:
import { ChromaticAberration } from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'

<EffectComposer>
  <ChromaticAberration
    blendFunction={BlendFunction.NORMAL}
    offset={new THREE.Vector2(0.002, 0.002)}
    radialModulation={false}
    modulationOffset={0.0}
  />
</EffectComposer>
```

---

## 12. 🖼️ VIGNETTE (Kenar Karartma)

**Kullanım:** Sinematik görünüm, fotoğraf overlay, premium atmosfer

```tsx
import { Vignette } from '@react-three/postprocessing'

<EffectComposer>
  <Vignette
    offset={0.3}
    darkness={0.7}
    blendFunction={BlendFunction.NORMAL}
  />
</EffectComposer>
```

---

## 13. ☀️ GOD RAYS (Tanrı Işıkları)

```tsx
import { GodRays } from '@react-three/postprocessing'

<mesh>
  <sphereGeometry />
  <meshBasicMaterial color="#ffaa00" transparent opacity={0.9} />
  <GodRays sun={meshRef} samples={60} density={0.96} decay={0.93} weight={0.4} />
</mesh>
```

---

## 14. 📽️ FILM GRAIN OVERLAY

```glsl
uniform float uTime;
uniform float uIntensity;
varying vec2 vUv;

float random(vec2 co) {
  return fract(sin(dot(co + uTime, vec2(12.9898,78.233))) * 43758.5453);
}

void main() {
  float grain = random(vUv * 1000.0) * uIntensity;
  gl_FragColor = vec4(vec3(grain), 1.0);
}
```

**CSS ile:**
```css
.noise-overlay {
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  pointer-events: none;
  z-index: 9999;
  opacity: 0.03;
  background-image: url("data:image/svg+xml,..."); /* inline SVG noise */
  background-repeat: repeat;
}
```

---

## 15. 🕳️ WARP/PORTAL SHADER

```glsl
uniform float uTime;
uniform float uWarpStrength;
varying vec2 vUv;

void main() {
  vec2 uv = vUv - 0.5;
  float dist = length(uv);
  
  // Spiral distortion
  float angle = atan(uv.y, uv.x);
  float warp = sin(dist * 10.0 - uTime * 2.0) * uWarpStrength;
  
  uv.x += cos(angle + warp) * dist * 0.1;
  uv.y += sin(angle + warp) * dist * 0.1;
  
  uv += 0.5;
  
  vec3 color = vec3(
    0.5 + 0.5 * sin(uv.x * 6.28 + uTime),
    0.5 + 0.5 * sin(uv.y * 6.28 + uTime * 1.3),
    0.5 + 0.5 * sin((uv.x + uv.y) * 6.28 + uTime * 0.7)
  );
  
  gl_FragColor = vec4(color, 1.0 - dist * 0.5);
}
```

---

> **v1.0 — 15 Hazır GLSL Shader | Three.js + R3F uyumlu**
> **Son Güncelleme:** 2026-04-05
