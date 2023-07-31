import React, { useRef } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three'
const Model = () => {
  const modelRef = useRef();

  // Load the 3D model using GLTFLoader
  const gltf = useLoader(GLTFLoader, '/3d_viridis_house.glb');

  return (
    <>
      <group ref={modelRef}>
        <primitive object={gltf.scene} />
      </group>
      <OrbitControls 
        enableZoom={true}     // Disable zooming with mouse wheel
        enablePan={true}      // Disable panning
        enableRotate={true}    // Enable horizontal rotation (yaw)
        enableDamping         // Smoother camera movement
        dampingFactor={0.1}
      />
    </>
  );
};

export default Model;