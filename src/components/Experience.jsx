import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import { motion } from "framer-motion-3d";
import { useEffect, useState, useRef } from "react";
import { framerMotionConfig } from "../config";

import * as THREE from "three";

import { Char } from "./3D_Components/Char";
import {
  Float,
  useScroll,
  Trail,
  useTexture,
  Environment,
} from "@react-three/drei";
import { Laser } from "./3D_Components/Laser";
import { Drone } from "./3D_Components/Drone";
import { Camp } from "./3D_Components/Camp";

export const Experience = (props) => {
  const { menuOpened } = props;
  const { viewport } = useThree();
  const data = useScroll();
  const skillAnimations = ["Drums", "Kicking", "Guitar"];

  const [section, setSection] = useState(0);
  const [animationNr, setAnimationNr] = useState(2);

  const cameraPositionX = useMotionValue();
  const cameraLookAtX = useMotionValue();

  const meshRef = useRef();

  const texture = useTexture(
    "textures/Anime_equirectangular-jpg_a_world_full_of_2005343437_10105240.jpg"
  );

  useEffect(() => {
    if (section === 0) {
      animate(cameraPositionX, menuOpened ? -3 : 0, {
        ...framerMotionConfig,
      });
    } else if (section === 1) {
      setAnimationNr(Math.floor(Math.random() * 3));
    } else {
      animate(cameraPositionX, -2, {
        ...framerMotionConfig,
      });
    }
  }, [menuOpened, section]);

  useFrame((state) => {
    let curSection = Math.floor(data.scroll.current * data.pages);

    if (curSection > 3) {
      curSection = 3;
    }

    if (curSection !== section) {
      setSection(curSection);
    }

    if (meshRef.current) {
      meshRef.current.rotation.y += 0.001;
    }

    state.camera.position.x = cameraPositionX.get();
    state.camera.lookAt(new THREE.Vector3(cameraLookAtX.get(), 0, 0));
  });

  return (
    <>
      <ambientLight intensity={0.2} />
      <Environment preset="sunset" />
      <motion.group
        position={[2.5, 1.6, 4.4]}
        rotation={[0, -40 * (Math.PI / 180), 0]}
        animate={"" + section}
        variants={{
          0: {
            scale: [0.8, 0.8, 0.8],
          },
          1: {
            y: -viewport.height + 2.8,
            x: 0.8,
            z: 6,
            rotateY: -20 * (Math.PI / 180),
          },
          2: {
            y: -viewport.height * 2 + 1,
            x: -4,
            z: 3,
            rotateY: 50 * (Math.PI / 180),
          },
          3: {
            y: -viewport.height * 3 + 3.2,
            x: -1.2,
            z: 8,
            rotateY: -50 * (Math.PI / 180),
          },
        }}
        transition={{
          type: "spring",
          stiffness: 20,
          damping: 10,
        }}
      >
        <Char
          animation={
            section === 0
              ? "Sitting Idle"
              : section === 1
                ? skillAnimations[animationNr]
                : section === 2
                  ? "Kneeling"
                  : section === 3
                    ? "Standing"
                    : "Standing"
          }
        />
        <motion.group
          position={[0, 2, 0]}
          scale={0.2}
          animate={"" + section}
          variants={{
            0: {
              z: 5.5,
              x: menuOpened ? -5.5 : -3,
              y: menuOpened ? 3.7 : 3.5,
              rotateY: menuOpened
                ? 175 * (Math.PI / 180)
                : 220 * (Math.PI / 180),
              rotateX: menuOpened ? 20 * (Math.PI / 180) : 30 * (Math.PI / 180),
              rotateZ: menuOpened ? 30 * (Math.PI / 180) : 35 * (Math.PI / 180),
            },
            1: {
              z: 0.6,
              x: -0.6,
              y: 2,
              rotateY: 110 * (Math.PI / 180),
              rotateX: 40 * (Math.PI / 180),
              rotateZ: -15 * (Math.PI / 180),
            },
            2: {
              z: -0.5,
              x: 0.5,
              y: 3.8,
              rotateY: 120 * (Math.PI / 180),
              rotateX: 45 * (Math.PI / 180),
              rotateZ: -10 * (Math.PI / 180),
            },
            3: {
              z: -2,
              x: -1,
              y: 1.2,

              rotateY: 120 * (Math.PI / 180),
              rotateX: 25 * (Math.PI / 180),
            },
          }}
        >
          <Float distance={1} speed={6}>
            <group>
              <Drone />
              <Laser />
            </group>
          </Float>
        </motion.group>
      </motion.group>

      <motion.group position={[0, -60, -30]} rotateY={120 * (Math.PI / 180)}>
        <mesh ref={meshRef}>
          <sphereGeometry args={[100, 32, 32]} />
          <meshStandardMaterial map={texture} side={THREE.BackSide} />
        </mesh>
      </motion.group>

      <motion.group
        position={[1, 2, 3]}
        rotation={[0, -20 * (Math.PI / 180), 0]}
        animate={"" + section}
        variants={{
          0: {
            scale: [1, 1, 1],
          },
          1: {
            y: -viewport.height + 3,
            x: -1,
            z: 6,
            rotateY: 40 * (Math.PI / 180),

          },
          2: {
            y: -viewport.height * 2 + 1,
            x: -1.8,
            z: 2.2,
            rotateY: -30 * (Math.PI / 180),
          },
          3: {
            y: -viewport.height * 3 + 2,
            x: -1.8,
            z: 2.2,
            rotateY: 40 * (Math.PI / 180),
          },
        }}
        transition={{
          type: "spring",
          stiffness: 20,
          damping: 10,
        }}
      >
        <Camp />
      </motion.group>
    </>
  );
};
