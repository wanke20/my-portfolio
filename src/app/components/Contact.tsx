import { useState } from "react";
import FormPage from "./FormPage";

const Contact = () => {
  "use client";

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="dropdown-container">
      <button onClick={() => setIsOpen(!isOpen)}>Contact Me</button>
      {isOpen && (
        <div className="dropdown-content">
            <FormPage />
        </div>
      )}
    </div>
  );
};

export default Contact;