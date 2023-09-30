import React from "react";

export default function Modal({ name, email, message }) {
  const firstLetter = name.charAt(0).toUpperCase();
  const remainingChars = name.slice(1);

  return (
    <div>
      <dialog open>
        <article>
          <header>
            <a
              href="https://m-soro.github.io/#/contact"
              aria-label="Close"
              className="close"
            ></a>
            <div className="contact-modal-header">
              <span>
                {`${firstLetter}${remainingChars}`}, your message is sent!
              </span>
              <span className="material-symbols-outlined">outgoing_mail</span>
            </div>
          </header>
          <body className="contact-modal-texts">
            <p>You wrote :</p>
            <p>{message}</p>
          </body>
          <footer className="contact-modal-texts">
            <p>From :</p>
            <p>{email}</p>
          </footer>
        </article>
      </dialog>
    </div>
  );
}
