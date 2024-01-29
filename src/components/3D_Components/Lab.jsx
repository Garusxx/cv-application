import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { CanvasTexture, MeshStandardMaterial, Color } from 'three';

export function Lab(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("models/lab.gltf");
  const { actions } = useAnimations(animations, group);


  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Sketchfab_Scene">
          <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
            <group name="root">
              <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
                <group name="Table_0" position={[-3.295, 1.003, 4.716]}>
                  <mesh
                    name="Object_4"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_4.geometry}
                    material={materials.mat_1}
                  />
                  <mesh
                    name="Object_5"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_5.geometry}
                    material={materials["Material.003"]}
                  />
                </group>
                <group
                  name="Board_2"
                  position={[-2.769, 2.543, 2.264]}
                  scale={0.949}
                >
                  <mesh
                    name="Object_9"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_9.geometry}
                    material={materials.mat_1}
                  />
                </group>
                <group
                  name="Microscope_3"
                  position={[-4.744, 1.941, 4.544]}
                  rotation={[0, 0.969, 0]}
                  scale={[1.119, 1, 1.119]}
                >
                  <mesh
                    name="Object_11"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_11.geometry}
                    material={materials.mat_1}
                  />
                </group>
                <group
                  name="Cabinet__1_4"
                  position={[1.757, 2.117, 4.472]}
                  rotation={[Math.PI / 2, -1.536, Math.PI / 2]}
                  scale={[0.037, 0.009, 0.011]}
                >
                  <mesh
                    name="Object_13"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_13.geometry}
                    material={materials.mat_1}
                  />
                </group>
                <group
                  name="plate_1_5"
                  position={[-2.049, 1.599, 4.927]}
                  scale={[0.016, 0.016, 0.116]}
                >
                  <mesh
                    name="Object_15"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_15.geometry}
                    material={materials.mat_1}
                  />
                </group>
                <group name="tube_2001_6" position={[-6.293, 1.463, 2.552]}>
                  <mesh
                    name="Object_17"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_17.geometry}
                    material={materials.mat_1}
                  />
                </group>
                <group
                  name="tube_1004_7"
                  position={[-1.949, 1.751, 4.92]}
                  scale={1.188}
                >
                  <mesh
                    name="Object_19"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_19.geometry}
                    material={materials.mat_1}
                  />
                </group>
                <group
                  name="tube_1001_8"
                  position={[-1.756, 1.751, 4.92]}
                  scale={1.188}
                >
                  <mesh
                    name="Object_21"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_21.geometry}
                    material={materials.mat_1}
                  />
                </group>
                <group
                  name="tube_1002_9"
                  position={[-1.554, 1.751, 4.92]}
                  scale={1.188}
                >
                  <mesh
                    name="Object_23"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_23.geometry}
                    material={materials.mat_1}
                  />
                </group>
                <group
                  name="Drawer_10"
                  position={[1.941, 1.302, 3.313]}
                  scale={[0.244, 0.245, 0.263]}
                >
                  <mesh
                    name="Object_25"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_25.geometry}
                    material={materials.mat_1}
                  />
                </group>
                <group
                  name="wall_11"
                  position={[1.472, 1.33, 2.009]}
                  rotation={[Math.PI / 2, 0, 0]}
                >
                  <mesh
                    name="Object_27"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_27.geometry}
                    material={materials.mat_2}
                  />
                </group>
                <group
                  name="Cube_12"
                  position={[-5.998, 2.917, 2.448]}
                  rotation={[0, 0, 0.004]}
                  scale={[0.484, 0.484, 0.336]}
                >
                  <mesh
                    name="Object_29"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_29.geometry}
                    material={materials.mat_1}
                  />
                </group>
                <group
                  name="Cube001_13"
                  position={[-6.137, 0.823, 2.59]}
                  scale={[0.533, 0.533, 0.371]}
                >
                  <mesh
                    name="Object_31"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_31.geometry}
                    material={materials.mat_1}
                  />
                </group>
                <group
                  name="Cube002_14"
                  position={[-5.433, 0.401, 2.495]}
                  scale={[0.194, 0.194, 0.23]}
                >
                  <mesh
                    name="Object_33"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_33.geometry}
                    material={materials.mat_1}
                  />
                </group>
                <group name="Plane_15" position={[-7.511, 0.227, 2.882]}>
                  <mesh
                    name="Object_35"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_35.geometry}
                    material={materials.mat_2}
                  />
                </group>
                <group
                  name="Cylinder_16"
                  position={[-5.737, 3.245, 4.323]}
                  scale={[0.55, 0.019, 0.521]}
                >
                  <mesh
                    name="Object_37"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_37.geometry}
                    material={materials.mat_1}
                  />
                </group>
                <group
                  name="Cylinder001_17"
                  position={[0.114, 3.245, 4.323]}
                  scale={[0.55, 0.019, 0.521]}
                >
                  <mesh
                    name="Object_39"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_39.geometry}
                    material={materials.mat_1}
                  />
                </group>
                <group
                  name="Cylinder002_18"
                  position={[-5.764, 3.245, 6.699]}
                  scale={[0.55, 0.019, 0.521]}
                >
                  <mesh
                    name="Object_41"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_41.geometry}
                    material={materials.mat_1}
                  />
                </group>
                <group
                  name="Cylinder003_19"
                  position={[0.114, 3.245, 6.699]}
                  scale={[0.55, 0.019, 0.521]}
                >
                  <mesh
                    name="Object_43"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_43.geometry}
                    material={materials.mat_1}
                  />
                </group>
                <group
                  name="Cube006_20"
                  position={[-0.102, 1.577, 2.953]}
                  rotation={[0, 0.269, 0]}
                >
                  <mesh
                    name="Object_45"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_45.geometry}
                    material={materials.mat_1}
                  />
                </group>
                <group
                  name="Cube003_21"
                  position={[-7.096, 0.39, 3.601]}
                  rotation={[0, 0.415, 0]}
                  scale={0.173}
                >
                  <mesh
                    name="Object_47"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_47.geometry}
                    material={materials.mat_1}
                  />
                </group>
                <group
                  name="Drawer001_22"
                  position={[1.687, 1.302, 5.637]}
                  rotation={[0, -Math.PI / 2, 0]}
                  scale={[0.244, 0.245, 0.263]}
                >
                  <mesh
                    name="Object_49"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_49.geometry}
                    material={materials.mat_1}
                  />
                </group>
            
                <group
                  name="Cylinder006_25"
                  position={[-3.422, 1.828, 4.848]}
                  rotation={[0, 0.175, 0]}
                  scale={0.175}
                >
                  <mesh
                    name="Object_55"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_55.geometry}
                    material={materials.mat_1}
                  />
                </group>
                <group
                  name="Cylinder008_26"
                  position={[-3.421, 1.81, 4.838]}
                  rotation={[0, 0.175, 0]}
                  scale={[0.162, 0.167, 0.162]}
                >
                  <mesh
                    name="Object_57"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_57.geometry}
                    material={materials.mat_1}
                  />
                </group>
                <group
                  name="Cylinder007_27"
                  position={[-3.419, 1.913, 4.777]}
                  scale={0.606}
                >
                  <mesh
                    name="Object_59"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_59.geometry}
                    material={materials.mat_1}
                  />
                </group>
                <group
                  name="Cylinder009_28"
                  position={[-2.849, 1.743, 4.832]}
                  scale={[0.318, 0.159, 0.318]}
                >
                  <mesh
                    name="mesh_28"
                    castShadow
                    receiveShadow
                    geometry={nodes.mesh_28.geometry}
                    material={materials.mat_1}
                    morphTargetDictionary={nodes.mesh_28.morphTargetDictionary}
                    morphTargetInfluences={nodes.mesh_28.morphTargetInfluences}
                  />
                </group>
                <group
                  name="Cylinder010_29"
                  position={[-2.865, 1.958, 4.72]}
                  scale={[0.595, 0.346, 0.617]}
                >
                  <mesh
                    name="Object_63"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_63.geometry}
                    material={materials.mat_1}
                  />
                </group>
                <group
                  name="polySurface7002_39"
                  position={[-3.432, 1.973, 4.873]}
                  rotation={[0, 0.717, 0]}
                  scale={0.127}
                >
                  <mesh
                    name="Object_65"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_65.geometry}
                    material={materials.mat_1}
                  />
                </group>
                <group
                  name="Icosphere_41"
                  position={[-2.878, 1.91, 4.853]}
                  scale={0.033}
                >
                  <mesh
                    name="Object_69"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_69.geometry}
                    material={materials.mat_1}
                  />
                </group>
                <group
                  name="Icosphere001_42"
                  position={[-2.83, 1.917, 4.871]}
                  scale={0.02}
                >
                  <mesh
                    name="Object_71"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_71.geometry}
                    material={materials.mat_1}
                  />
                </group>
                <group
                  name="Icosphere002_43"
                  position={[-2.883, 1.908, 4.977]}
                  scale={0.014}
                >
                  <mesh
                    name="Object_73"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_73.geometry}
                    material={materials.mat_1}
                  />
                </group>
                <group
                  name="Cylinder013_44"
                  position={[-2.848, 1.861, 5.086]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={0.035}
                >
                  <mesh
                    name="Object_75"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_75.geometry}
                    material={materials.mat_1}
                  />
                </group>
                <group
                  name="Cylinder014_45"
                  position={[-3.425, 1.834, 5.003]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={0.024}
                >
                  <mesh
                    name="Object_77"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_77.geometry}
                    material={materials.mat_1}
                  />
                </group>
                <group
                  name="polySurface7003_46"
                  position={[-2.859, 2.163, 4.842]}
                  rotation={[0, -1.209, 0]}
                  scale={0.131}
                >
                  <mesh
                    name="mesh_37"
                    castShadow
                    receiveShadow
                    geometry={nodes.mesh_37.geometry}
                    material={materials.mat_1}
                    morphTargetDictionary={nodes.mesh_37.morphTargetDictionary}
                    morphTargetInfluences={nodes.mesh_37.morphTargetInfluences}
                  />
                </group>
                <group
                  name="polySurface7004_47"
                  position={[-4.794, 1.755, 4.646]}
                  rotation={[0, 0.969, -0.065]}
                  scale={[0.752, 0.342, 0.763]}
                >
                  <mesh
                    name="Object_81"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_81.geometry}
                    material={materials.mat_1}
                  />
                </group>
                <group name="board001_48" position={[-2.775, 2.141, 4.893]}>
                  <mesh
                    name="Object_83"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_83.geometry}
                    material={materials.mat_1}
                  />
                  <mesh
                    name="Object_84"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_84.geometry}
                    material={materials["Material.005"]}
                  />
                </group>
                <group
                  name="polySurface7005_49"
                  position={[-2.851, 2.188, 4.839]}
                  rotation={[-0.107, -1.222, -0.142]}
                  scale={0.131}
                >
                  <mesh
                    name="Object_86"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_86.geometry}
                    material={materials.lambert2}
                  />
                </group>
                <group
                  name="Cylinder017_50"
                  position={[-3.807, 1.83, 4.848]}
                  rotation={[0, 0.306, 0]}
                  scale={0.175}
                >
                  <mesh
                    name="Object_88"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_88.geometry}
                    material={materials.mat_1}
                  />
                </group>
                <group
                  name="Cylinder018_51"
                  position={[-3.808, 1.81, 4.838]}
                  rotation={[0, 0.306, 0]}
                  scale={[0.162, 0.167, 0.162]}
                >
                  <mesh
                    name="Object_90"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_90.geometry}
                    material={materials.mat_1}
                  />
                </group>
                <group
                  name="Cylinder019_52"
                  position={[-3.814, 1.911, 4.777]}
                  rotation={[0, 0.131, 0]}
                  scale={0.606}
                >
                  <mesh
                    name="Object_92"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_92.geometry}
                    material={materials.mat_1}
                  />
                </group>
                <group
                  name="polySurface7006_53"
                  position={[-3.814, 1.973, 4.874]}
                  rotation={[0, 0.848, 0]}
                  scale={0.127}
                >
                  <mesh
                    name="Object_94"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_94.geometry}
                    material={materials.mat_1}
                  />
                </group>
               
                
                <group
                  name="Armature_94"
                  position={[-4.107, 0.238, 3.152]}
                  rotation={[Math.PI / 2, 0, -1.471]}
                  scale={0.019}
                ></group>
               
                
                <group
                  name="Empty002_113"
                  position={[-3.316, 2.535, 4.037]}
                  scale={0.361}
                />
                <group
                  name="Text_114"
                  position={[-2.984, 1.734, 5.076]}
                  rotation={[-0.15, -0.582, -0.076]}
                  scale={0}
                >
                  <mesh
                    name="Object_177"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_177.geometry}
                    material={materials["Material.004"]}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("models/lab.gltf");
