import React, {FC} from 'react';
import {Popup} from "@Home/UI";

interface Props {
  isOpen: boolean,
  handleClose: () => void
}

const ContactMePopup: FC<Props> = ({isOpen, handleClose}) => {
  return (
    <Popup title="CONTACT_INFO" isOpen={isOpen} handleClose={handleClose} big>
      <p>
        <a
          href={process.env.NEXT_PUBLIC_HABR_LINK}
          rel="noreferrer noopener"
          target="_blank"
        >
          Habr.Career
        </a>
      </p>
      <p>
        <a
          href="https://t.me/animepunkgirl"
          rel="noreferrer noopener"
          target="_blank"
        >
          Telegram
        </a>
      </p>
      <p>
        <a
          href="mailto:mukhametshin.work@gmail.com"
          rel="noreferrer noopener"
          target="_blank"
        >
          E-Mail
        </a>
      </p>
      <p>
        <a
          href={process.env.NEXT_PUBLIC_GITHUB_LINK}
          rel="noreferrer noopener"
          target="_blank"
        >
          GitHub
        </a>
      </p>
    </Popup>
  );
};

export default ContactMePopup;