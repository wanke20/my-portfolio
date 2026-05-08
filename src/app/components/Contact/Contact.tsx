"use client";
import { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="dropdown-container">
      <button onClick={() => setIsOpen(!isOpen)}>Contact Me</button>
      {isOpen && (
        <div className="dropdown-content">
          <div className="first-child">
            <h1>Name:</h1>
            <p>Kenneth Wan</p>
          </div>
          <div className="other-child">
            <h1>Email:</h1>
            <p>kennethwan20@gmail.com</p>
          </div>
          <div className="other-child">
            <h1>Phone Number:</h1>
            <p>{"(508)-361-5838"}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
