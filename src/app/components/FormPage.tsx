import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import SuccessButton from "./SuccessButton";

let [public_id, template_id, public_key]: string[] = [
  process.env.NEXT_PUBLIC_ID ?? "",
  process.env.NEXT_PUBLIC_TEMPLATE_ID ?? "",
  process.env.NEXT_PUBLIC_KEY ?? "",
];

const FormPage = () => {
  const form: any = useRef();

  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [allowSubmit, setAllowSubmit] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(false);
      setAllowSubmit(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, [showPopup]);

  const sendEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (allowSubmit) {
      emailjs.sendForm(public_id, template_id, form.current, public_key).then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      setAllowSubmit(false);
    }
  };

  return (
    <div>
      <StyledContactForm>
        <form className="" ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input
            type="submit"
            value="Submit"
            onClick={() => setShowPopup(true)}
          />
        </form>
      </StyledContactForm>
      {showPopup && <SuccessButton />}
    </div>
  );
};

export default FormPage;

const StyledContactForm = styled.div`
  width: auto;

  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;

    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    label {
      margin-top: 1rem;
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;

      &:hover {
        background: rgb(0, 206, 158);
      }
    }
  }
`;
