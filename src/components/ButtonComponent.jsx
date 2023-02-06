const ButtonComponent = (props) => {
  return (
    <button
      className="button"
      style={{
        backgroundColor: props.BGColor,
        padding: props.padding + "px",
      }}
    >
      {props.title}
    </button>
  );
};

export default ButtonComponent;
