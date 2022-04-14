import React, {ReactNode, useEffect, useState} from 'react';
import { Modal, CloseButton, Content, Fullscreen, Background, Title } from "./Popup.styles"
import {AnimatePresence} from "framer-motion";
import { createPortal } from "react-dom";
import Wrapper from "../../Home.styles"
import {useRecoilState} from "recoil";
import modalOpenState from "../../../../store/Home/modalOpen";

export interface PopupProps {
  isOpen: boolean,
  handleClose: () => void,
  children: ReactNode,
  title?: string,
  titleLink?: string,
  big?: boolean
}

const popupHide = { transformPerspective: 400, y: '-100%', rotateX: 45, scale: 0.5 }
const popupShow = { transformPerspective: 400, y: 0, rotateX: 0, scale: 1 }

const Popup = ({isOpen, handleClose, children, title, big = false}: PopupProps) => {
  const [isBrowser, setIsBrowser] = useState(false)
  const [, setModalOpenState] = useRecoilState(modalOpenState)

  useEffect(() => {
    setIsBrowser(true)
  }, [])

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement
    if(target.classList.contains(Background.styledComponentId))
      handleClose()
  }

  useEffect(() => {
    setModalOpenState(isOpen)
  }, [isOpen, setModalOpenState])

  if(!isBrowser)
    return null

  return null;

  return (
    createPortal(
      <AnimatePresence>
        {isOpen &&
            <Fullscreen
                key="popup_wrapper"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <Background onClick={handleBackgroundClick}>
                    <Modal
                        key="popup"
                        initial={popupHide}
                        animate={popupShow}
                        exit={popupHide}
                    >
                        <CloseButton onClick={handleClose}>&#xd7;</CloseButton>
                      {title && <Title type="h2" template="cssClass">{title}</Title>}
                        <Content big={big}>{children}</Content>
                    </Modal>
                </Background>
            </Fullscreen>
        }
      </AnimatePresence>, document.getElementsByClassName(Wrapper.styledComponentId)[0]!)
  );
};

export default Popup;