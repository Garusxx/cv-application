import {  Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { MotionConfig } from "framer-motion";
import { Leva } from "leva";
import { Suspense, useEffect, useState, useMemo } from "react";
import { Experience } from "./components/Experience";
import { Interface } from "./interface/Interface";
import { Menu } from "./components/Menu";
import { ScrollManager } from "./components/ScrollManager";
import { framerMotionConfig } from "./config";

function App() {
  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);

  useEffect(() => {
    setMenuOpened(false);
  }, [section]);

  return (
    <>
      <MotionConfig
        transition={{
          ...framerMotionConfig,
        }}
      >
        <Suspense
          fallback={
            <div className="flex justify-center items-center h-screen text-6xl font-bold text-white bg-black">
              Loading....
            </div>
          }
        >
          <Canvas
            shadows={"percentage"}
            camera={{ position: [0, 5, 9], fov: 50 }}
          >
            <ScrollControls pages={4} damping={0.5}>
              <ScrollManager section={section} onSectionChange={setSection} />
              <Scroll>
                <Experience section={section} menuOpened={menuOpened} />
              </Scroll>
              <Scroll html>
                <Interface onSectionChange={setSection} />
              </Scroll>
            </ScrollControls>
          </Canvas>
        </Suspense>

        <Menu
          onSectionChange={setSection}
          menuOpened={menuOpened}
          setMenuOpened={setMenuOpened}
        />
      </MotionConfig>
      <Leva hidden />
    </>
  );
}

export default App;
