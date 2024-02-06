import Glitch from "../UI/Glitch";
import { useEffect, useState } from "react";

import BackgroundImage from "../../public/images/bg-image.png";
import sound from "../../public/sounds/poem-soundroll-main-version-4328-02-33.wav";

export const Menu = (props) => {
  const { onSectionChange, menuOpened, setMenuOpened } = props;
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.1);
  const [audio] = useState(new Audio(sound));

  useEffect(() => {
    audio.volume = volume;

    const playAudio = () => {
      audio.play();
      // Remove event listener after play
      document.removeEventListener("click", playAudio);
      document.removeEventListener("touchstart", playAudio);
    };

    document.addEventListener("click", playAudio);
    document.addEventListener("touchstart", playAudio);

    return () => {
      document.removeEventListener("click", playAudio);
      document.removeEventListener("touchstart", playAudio);
    };
  }, [audio, volume]);

  const togglePlay = () => {
    const newIsPlaying = !isPlaying;
    setIsPlaying(newIsPlaying);
    if (newIsPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
  };

  return (
    <>
      <div className="z-20 fixed top-5 mid:top-12 right-5 md:right-12 flex space-x-2">
        <button
          className="flex items-center justify-center p-3 bg-indigo-600 w-11 h-11 rounded-md text-white text-2xl"
          onClick={togglePlay}
        >
          <span className="transform -translate-y-1">♫</span>
        </button>
        <button
          onClick={() => setMenuOpened(!menuOpened)}
          className=" p-3 bg-indigo-600 w-11 h-11 rounded-md"
        >
          <div
            className={`bg-white h-0.5 rounded-md w-full transition-all ${
              menuOpened ? "rotate-45  translate-y-0.5" : ""
            }`}
          />
          <div
            className={`bg-white h-0.5 rounded-md w-full my-1 ${
              menuOpened ? "hidden" : ""
            }`}
          />
          <div
            className={`bg-white h-0.5 rounded-md w-full transition-all ${
              menuOpened ? "-rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`z-10 fixed top-0 right-0 bottom-0 transition-all overflow-hidden flex flex-col
      ${menuOpened ? "w-[100%] md:w-2/5 lg:w-1/5" : "w-0"}`}
        style={{
          backgroundImage: `url(${BackgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex-1 flex items-start justify-center flex-col gap-6 p-8">
          <MenuButton label="About" onClick={() => onSectionChange(0)} />
          <MenuButton label="Skills" onClick={() => onSectionChange(1)} />
          <MenuButton label="Projects" onClick={() => onSectionChange(2)} />
          <MenuButton label="Contact" onClick={() => onSectionChange(3)} />
        </div>
        <span className="flex mb-10 mr-10 ml-10">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="nes-icon twitter mr-8"></i>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="nes-icon facebook mr-8"></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="nes-icon instagram mr-8"></i>
          </a>
          <a
            href="https://github.com/Garusxx"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="nes-icon github mr-8"></i>
          </a>
          <a
            href="mailto:rafal.gaarus@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="nes-icon gmail"></i>
          </a>
        </span>
      </div>
    </>
  );
};

const MenuButton = (props) => {
  const { label, onClick } = props;
  return (
    <button
      onClick={onClick}
      className="text-2xl font-bold cursor-pointer hover:text-indigo-600 transition-colors"
    >
      <Glitch
        text={label}
        largeFontSize={"2rem"}
        midFontSize={"1rem"}
        smallFontSize={"2rem"}
      />
    </button>
  );
};
