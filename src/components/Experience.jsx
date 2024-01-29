import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import { motion } from "framer-motion-3d";
import { useEffect, useState, useRef } from "react";
import { framerMotionConfig } from "../config";

import * as THREE from "three";

import { Char } from "./3D_Components/Char";
import { Float, useScroll, Trail } from "@react-three/drei";
import { Background } from "./Background ";
import { Lab } from "./3D_Components/Lab";
import { Laser } from "./3D_Components/Laser";
import { Drone } from "./3D_Components/Drone";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

export const Experience = (props) => {
  const { menuOpened } = props;
  const { viewport } = useThree();
  const data = useScroll();
  const skillAnimations = ["Drums", "Kicking", "Guitar"];

  const [section, setSection] = useState(0);
  const [animationNr, setAnimationNr] = useState(2);

  const cameraPositionX = useMotionValue();
  const cameraLookAtX = useMotionValue();

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

    state.camera.position.x = cameraPositionX.get();
    state.camera.lookAt(new THREE.Vector3(cameraLookAtX.get(), 0, 0));
  });

  return (
    <>
      <Background />
      <ambientLight intensity={1} />
      {/* <ShootingStar />
      <EffectComposer>
        <Bloom mipmapBlur luminanceThreshold={1} />
      </EffectComposer> */}
      <motion.group
        position={[-1, 0.2, 1.3]}
        rotation={[0, 10 * (Math.PI / 180), 0]}
        animate={"" + section}
        variants={{
          0: {
            scale: [1.6, 1.6, 1.6],
          },
          1: {
            y: -viewport.height,
            x: 1.2,
            z: 2,
            scale: [2.2, 2.2, 2.2],
            rotateY: -20 * (Math.PI / 180),
          },
          2: {
            y: -viewport.height * 2,
            x: 6,
            z: 6,
          
          },
          3: {
            y: -viewport.height * 3 - 2,
            x: 1,
            z: 5,
            scale: [3.2, 3.2, 3.2],
            rotateY: -50 * (Math.PI / 180),
          },
        }}
      >
        <Char
          animation={
            section === 0
              ? "Dice"
              : section === 1
                ? skillAnimations[animationNr]
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
              z: 1,
              x: -2,
              y: menuOpened ? 2.5 : 2.1,
              rotateY: menuOpened
                ? 135 * (Math.PI / 180)
                : 175 * (Math.PI / 180),
              rotateX: menuOpened ? 30 * (Math.PI / 180) : 30 * (Math.PI / 180),
            },
            1: {
              z: -1.7,
              x: -0.5,
              y: 1.5,
              rotateY: 85 * (Math.PI / 180),
              rotateX: 60 * (Math.PI / 180),
            },
            2: {
              z: -2.5,
              x: 2,
              y: -1,
              rotateY: 40 * (Math.PI / 180),
              rotateX: 35 * (Math.PI / 180),
              rotateZ: 15 * (Math.PI / 180),
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

      <motion.group
        position={[2, 0, -2]}
        animate={{
          y: section === 0 ? 0 : -1,
        }}
      >
        <Lab />
      </motion.group>
    </>
  );
};

function ShootingStar() {
  const ref = useRef();
  useFrame((state) => {
    const t = state.clock.getElapsedTime() * 2;
    ref.current.position.set(
      Math.sin(t) * 4,
      Math.atan(t) * Math.cos(t / 2) * 2,
      Math.cos(t) * 4
    );
  });
  return (
    <Trail
      width={5}
      length={8}
      color={new THREE.Color(2, 1, 10)}
      attenuation={(t) => t * t}
    >
      <mesh ref={ref}>
        <sphereGeometry args={[0.25]} />
        <meshBasicMaterial color={[10, 1, 10]} toneMapped={false} />
      </mesh>
    </Trail>
  );
}
