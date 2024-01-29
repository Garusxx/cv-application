
import "./LuminousBorder.css";


export const LuminousBorder = (props) => {
  const { children } = props;
  return (
    <div className="glowing-btn">
     {props.children}
    </div>
  );
};

export default LuminousBorder;