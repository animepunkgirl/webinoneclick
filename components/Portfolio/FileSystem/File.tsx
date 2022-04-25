import React, { useState, VFC } from 'react';
import { MdFilePresent } from "react-icons/md";
import { Field } from "./FileSystem.styles";

interface Props {
  name: string,
  handleClick: () => void,
}

const File: VFC<Props> = ({name, handleClick}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Field onClick={handleClick} isOpen={isOpen}>
      <MdFilePresent size="27px" />
      <p>{name}</p>
    </Field>
  );
};

export default File;