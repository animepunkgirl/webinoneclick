import React, {FC} from 'react';
import { Popup } from "@Home/UI";

interface Props {
  isOpen: boolean,
  handleClose: () => void
}

const ContactMePopup: FC<Props> = ({isOpen, handleClose}: Props) => {

  return (
    <Popup title="ContactInfo" isOpen={isOpen} handleClose={handleClose} big>
      <p>
        <a
          href={process.env.NEXT_PUBLIC_UPWORK_LINK}
          rel="noreferrer noopener"
          target="_blank"
        >Upwork</a>
      </p>
      <p>
        <a
          href="https://t.me/animepunkgirl"
          rel="noreferrer noopener"
          target="_blank"
        >Telegram</a>
      </p>
      <p>
        <a
          href="mailto:mukhametshin.work@gmail.com"
          rel="noreferrer noopener"
          target="_blank"
        >E-Mail</a>
      </p>
    </Popup>
  );
};

export default ContactMePopup;