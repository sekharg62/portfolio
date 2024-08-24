import React from 'react'

import { Canvas } from '@react-three/fiber';
import { OrbitControls, RenderTexture, Text } from '@react-three/drei';

export default function Box() {
  return (
    <Canvas>
      <OrbitControls enableZoom={false} autoRotate={true}/>
      <ambientLight intensity={1}/>
      <directionalLight position={[3,2,1]}/>
      <mesh>
        <boxGeometry args={[2,2,2]} />
        <meshPhysicalMaterial>
            <RenderTexture attach="map">
                <perspectiveCamera makedeDefault position={[0,0,2]}/>
                <color attach="background" args={["pink"]}/>
                <Text fontSize={3} color="red">
                    Hello
                </Text>
            </RenderTexture>
        </meshPhysicalMaterial>
      </mesh>
      
    </Canvas>
  );
}
