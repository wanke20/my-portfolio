import { useState } from "react";
import LoadingBar from "./loadingBar";
import "./SuccessPopup.css";

const SuccessPopup = () => {
  const [counter, setCounter] = useState<number>(100);

  setInterval(() => setCounter(counter - 100), 1000);

  return (
    <div className="popup">
      <p className="mb-5 ml-3">✅ Message Sent!</p>
      <LoadingBar />
    </div>
  );
};

export default SuccessPopup;
