import { CSSProperties, useState } from "react";
import './Success.css';

const SuccessButton = ({ bgcolor }: any) => {
  const [counter, setCounter] = useState<number>(100);

  setInterval(() => setCounter(counter - 100), 1000);

  const containerStyles = {
    height: 4,
    width: "99%",
    borderRadius: 50,
  };

  const fillerStyles = {
    height: "100%",
    width: `${counter}%`,
    backgroundColor: "green",
    borderRadius: "inherit",
    transition: 'width 1s ease-in-out',
    marginLeft: "1px",
  };

  return (
    <div style={styles.popup}>
      <p className="ml-3 mb-5">✅  Message Sent!</p>
      <div style={containerStyles}>
        <div className="filler-styles" />
      </div>
    </div>
  );
};

export default SuccessButton;

const styles: { popup: CSSProperties } = {
  popup: {
    position: "fixed",
    top: "6%",
    left: "10%",
    transform: "translate(-50%, -50%)",

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    justifyContent: "flex-end",

    backgroundColor: "rgb(24,24,27)",
    color: "rgb(255 255 255)",
    fontSize: "16px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",

    borderRadius: "5px",
    borderWidth: "1px",
    borderColor: "rgb(226 232 240)",

    width: "200px",
    height: "75px",
  },
};
