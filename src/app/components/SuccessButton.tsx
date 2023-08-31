import { CSSProperties } from "react";

const SuccessButton = () => {
  return <div style={styles.popup}>Email Sent!</div>;
};

export default SuccessButton;

const styles: { popup: CSSProperties } = {
  popup: {
    position: "fixed",
    top: "8%",
    left: "25%",
    transform: "translate(-50%, -50%)",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",

    backgroundColor: "rgba(24,24,27,0.2)",
    color: "rgb(255 255 255)",
    fontSize: "16px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",

    borderRadius: "5px",
    borderWidth: "1px",
    borderColor: "rgb(226 232 240)",
    opacity: "0.95",

    width: "200px",
    height: "100px",
  },
};