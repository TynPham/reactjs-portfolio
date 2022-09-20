import React from "react";
import "./Contact.scss";
import {
  AiOutlineMail,
  AiOutlineMessage,
  AiOutlineWhatsApp,
} from "react-icons/ai";

import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0cg2jlb",
        "template_vgafa3j",
        form.current,
        "g5rwb4uup9dRilnx6"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container container-contact">
        <div className="options">
          <article className="option">
            <AiOutlineMail className="icon" />
            <h4>Email</h4>
            <h5
              style={{
                fontSize: "0.7rem",
              }}
            >
              phamtuyendz1104@gmail.com
            </h5>
            <a
              href="mailto:phamtuyendz1104@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="option">
            <AiOutlineMessage className="icon" />
            <h4>Message</h4>
            <h5>Tuyến Phạm</h5>
            <a
              href="http://m.me/phamtuyendeptrai"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="option">
            <AiOutlineWhatsApp className="icon" />
            <h4>WhatsApp</h4>
            <h5>1234567890</h5>
            <a href="#">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            placeholder="Your Full Name"
            name="name"
            required
          />
          <input type="email" placeholder="Your Email" name="email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
