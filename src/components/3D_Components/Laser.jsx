import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { CanvasTexture, MeshStandardMaterial, Color } from "three";

export function Laser(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("models/lab.gltf");

  const canvas = document.createElement("canvas");
  canvas.width = 256;
  canvas.height = 256;

  const context = canvas.getContext("2d");
  const gradient = context.createLinearGradient(0, 0, canvas.width, 0);

  const newMaterial = materials.mat_1.clone();

  
  newMaterial.color.set('#00ff41');

  return (
    <group ref={group} {...props} dispose={null}>
      {/* Drone light */}
      <group name="Empty001_112">
        <group scale={0.5} rotation={[2, Math.PI , 7]}>
          <mesh
            name="mesh_62"
            castShadow
            receiveShadow
            geometry={nodes.mesh_62.geometry}
            material={newMaterial}
            morphTargetDictionary={nodes.mesh_62.morphTargetDictionary}
            morphTargetInfluences={nodes.mesh_62.morphTargetInfluences}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("models/lab.gltf");
