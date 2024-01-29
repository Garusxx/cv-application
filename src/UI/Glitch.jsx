import "./Glitch.css";
import { useMediaQuery } from "react-responsive";

export const Glitch = (props) => {
  const { largeFontSize, smallFontSize, midFontSize } = props;

  const isSmallScreen = useMediaQuery({ query: "(max-width: 600px)" });
  const isMediumScreen = useMediaQuery({
    query: "(min-width: 601px) and (max-width: 1200px)",
  });

  let fontSize;

  if (isSmallScreen) {
    fontSize = smallFontSize;
  } else if (isMediumScreen) {
    fontSize = midFontSize;
  } else {
    fontSize = largeFontSize;
  }

  return (
    <div className="container ">
      {props.h1}
      <div className="stack" style={{ "--stacks": "3", fontSize: fontSize }}>
        <span style={{ "--index": "0" }}>{props.text}</span>
        <span style={{ "--index": "1" }}>{props.text}</span>
        <span style={{ "--index": "2" }}>{props.text}</span>
      </div>
    </div>
  );
};

export default Glitch;
