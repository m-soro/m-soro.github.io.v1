import { useState } from "react";
import React from "react";

export default function Modal({ name, email, message }) {
  const [isShown, setIsShown] = useState(true);
  const firstLetter = name.charAt(0).toUpperCase();
  const remainingChars = name.slice(1);

  const handleClick = () => {
    setIsShown((current) => !current);
  };

  const loaded = () => {
    return (
      <div>
        <dialog open>
          <article>
            <header>
              <button
                aria-label="Close"
                className="close outline"
                style={{ border: "none" }}
                onClick={handleClick}
              ></button>
              <div className="contact-modal-header">
                <span>
                  {`${firstLetter}${remainingChars}`}, your message is sent!
                </span>
                <span className="material-symbols-outlined">outgoing_mail</span>
              </div>
            </header>
            <div className="contact-modal-texts">
              <p>You wrote :</p>
              <p>{message}</p>
            </div>
            <footer className="contact-modal-texts">
              <p>From :</p>
              <p>{email}</p>
            </footer>
          </article>
        </dialog>
      </div>
    );
  };

  const empty = () => {
    return <div></div>;
  };

  return isShown ? loaded() : empty();
}
