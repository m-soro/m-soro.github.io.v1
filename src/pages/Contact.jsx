import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const nameInput = React.useRef();
  const emailInput = React.useRef();
  const messageInput = React.useRef();
  const form = useRef();

  const resetInput = () => {
    nameInput.current.value = "";
    emailInput.current.value = "";
    messageInput.current.value = "";
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_capp2er",
        "template_8qwcpz2",
        form.current,
        "qeAgLDozcphE9CWCH"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    resetInput();
  };

  return (
    <div className="Contact">
      <article className="contact-form">
        <h4>Send me a message</h4>
        <br />
        <p>
          Hello, 👋 I would like to hear from you. Say hi, or comment. Let's
          chat.
        </p>
        <br />
        <form ref={form} onSubmit={sendEmail}>
          <p> Name:</p>
          <input type="text" name="user_name" ref={nameInput} />
          <p>Email:</p>
          <input type="email" name="user_email" ref={emailInput} />
          <p>Message:</p>
          <textarea name="message" rows="3" ref={messageInput} />
          <input type="submit" value="send" className="outline send-button" />
        </form>
      </article>
      <div>
        <article className="Contact-Options">
          <div>
            <a href="mailto:napoleon_soro@rocketmail.com">Email</a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/marksoro">LinkedIn</a>
          </div>
          <div>
            <a href="https://github.com/m-soro/">GitHub</a>
          </div>
        </article>
      </div>
    </div>
  );
}
