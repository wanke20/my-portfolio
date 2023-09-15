"use client"
import { useState } from "react";
import FormPage from "../FormPage/FormPage";
import './Contact.css';

const Contact = () => {

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