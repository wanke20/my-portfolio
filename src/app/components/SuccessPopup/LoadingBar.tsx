import { useState, useEffect } from "react";
import "./LoadingBar.css";

const LoadingBar = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`loading-bar ${isLoading ? "show-loading-bar" : ""}`} />
  );
};

export default LoadingBar;
