import "./UIelements.css";

export const Border = (props) => {
  const { children } = props;
  return (
    <div className="box">
      <div className="content">{children}</div>
    </div>
  );
};

