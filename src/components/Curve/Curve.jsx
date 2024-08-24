import React, { useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import * as THREE from 'three';

const GradientTexture = () => {
  const textureRef = useRef();

  useEffect(() => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    canvas.width = 256;
    canvas.height = 256;

    // Create a gradient
    const gradient = context.createLinearGradient(0, 0, 256, 256);
    gradient.addColorStop(0, 'pink');
    gradient.addColorStop(1, 'red');

    // Apply gradient to canvas
    context.fillStyle = gradient;
    context.fillRect(0, 0, 256, 256);

    // Use canvas as texture
    textureRef.current = new THREE.CanvasTexture(canvas);
  }, []);

  return textureRef.current ? <primitive object={textureRef.current} attach="map" /> : null;
};

const Curve = () => {
  return (
    <Canvas>
      <OrbitControls enableZoom={true} autoRotate={true} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 2, 1]} />
      <mesh>
        <torusKnotGeometry args={[1, 0.4, 100, 16]} />
        <meshPhongMaterial>
          <GradientTexture />
        </meshPhongMaterial>
      </mesh>
      <Text
        position={[0, 2, 0]}  // Position above the torus knot
        fontSize={0.5}
        color="black"
        anchorX="center"
        anchorY="middle"
      >
        3D Torus Knot
      </Text>
    </Canvas>
  );
};

export default Curve;
