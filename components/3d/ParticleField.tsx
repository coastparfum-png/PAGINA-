"use client";

import { useRef, useMemo, useCallback } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

function Particles() {
  const meshRef = useRef<THREE.Points>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const { size } = useThree();

  const count = 3500;

  const { positions, colors, sizes, velocities } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const velocities = new Float32Array(count * 3);

    const goldColor = new THREE.Color("#C9A84C");
    const creamColor = new THREE.Color("#F5F0E8");
    const whiteColor = new THREE.Color("#FFFFFF");

    for (let i = 0; i < count; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;

      velocities[i * 3]     = (Math.random() - 0.5) * 0.002;
      velocities[i * 3 + 1] = Math.random() * 0.005 + 0.001;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.001;

      const rand = Math.random();
      let c: THREE.Color;
      if (rand < 0.7) c = goldColor;
      else if (rand < 0.9) c = creamColor;
      else c = whiteColor;

      colors[i * 3]     = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;

      sizes[i] = Math.random() < 0.05
        ? Math.random() * 4 + 4
        : Math.random() * 1.5 + 0.5;
    }

    return { positions, colors, sizes, velocities };
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    mouseRef.current.x = (e.clientX / window.innerWidth - 0.5) * 20;
    mouseRef.current.y = -(e.clientY / window.innerHeight - 0.5) * 20;
  }, []);

  useMemo(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("mousemove", handleMouseMove);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, [handleMouseMove]);

  useFrame((state) => {
    if (!meshRef.current) return;
    const geo = meshRef.current.geometry;
    const pos = geo.attributes.position.array as Float32Array;
    const t = state.clock.elapsedTime;

    for (let i = 0; i < count; i++) {
      pos[i * 3]     += velocities[i * 3] + Math.sin(t * 0.3 + i) * 0.0005;
      pos[i * 3 + 1] += velocities[i * 3 + 1];
      pos[i * 3 + 2] += velocities[i * 3 + 2];

      // Mouse repulsion
      const dx = pos[i * 3] - mouseRef.current.x;
      const dy = pos[i * 3 + 1] - mouseRef.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 2) {
        pos[i * 3]     += (dx / dist) * 0.03;
        pos[i * 3 + 1] += (dy / dist) * 0.03;
      }

      // Wrap around
      if (pos[i * 3 + 1] > 12) {
        pos[i * 3 + 1] = -12;
        pos[i * 3]     = (Math.random() - 0.5) * 20;
      }
      if (Math.abs(pos[i * 3]) > 12)     pos[i * 3]     *= -0.8;
      if (Math.abs(pos[i * 3 + 2]) > 7)  pos[i * 3 + 2] *= -0.8;
    }

    geo.attributes.position.needsUpdate = true;
    meshRef.current.rotation.y = Math.sin(t * 0.05) * 0.1;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={count}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
          count={count}
        />
        <bufferAttribute
          attach="attributes-size"
          args={[sizes, 1]}
          count={count}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        sizeAttenuation
        vertexColors
        transparent
        opacity={0.8}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function ParticleField() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 60 }}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
      gl={{ antialias: false, alpha: true }}
    >
      <Particles />
    </Canvas>
  );
}
