import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import SuccessPopup from "../SuccessPopup/SuccessPopup";
import './FormPage.css';

const [public_id, template_id, public_key]: string[] = [
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
    }, 2200);

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
      <div className="StyledContactForm">
        <form ref={form} onSubmit={sendEmail}>
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
      </div>
      {showPopup && <SuccessPopup />}
    </div>
  );
};

export default FormPage;
