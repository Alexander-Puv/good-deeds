import cl from '@/styles/components/UI/Popup/Popup.module.scss'
import React, { FC } from 'react'
import { RxCross1 } from 'react-icons/rx'
import PopupButton, { PopupButtonContainer, PopupButtonProps } from './PopupButton'

interface PopupProps {
  title: string,
  children: React.ReactNode,
  open: {
    state: boolean,
    setState: (prop: boolean) => void
  },
  btns: string | { // one button (like 'OK, I understand'), doesn't have anything but text
    acceptBtn: Pick<PopupButtonProps, 'text' | 'active' | 'onClick'>,
    declineBtn: Pick<PopupButtonProps, 'text' | 'active' | 'onClick'>
  } // or two buttons to accept or decline somthing
}

const Popup = ({title, children, open, btns}: PopupProps) => {
  const close = () => {
    open.setState(false)
  }

  return (
    <div className={`${cl.popupContainer} ${open.state ? cl.open : ''}`}>
      <div className={cl.popup}>
        <div className={cl.cross} onClick={close}><RxCross1 /></div>
        <h2 className={cl.title}>{title}</h2>
        {children}
        <div className={cl.btns}>
          {typeof btns === 'string' ?
            <PopupButton text={btns} open={open}  />
          : <PopupButtonContainer>
            <PopupButton {...{...btns.declineBtn, open}} decline />
            <PopupButton {...{...btns.acceptBtn, open}} />
          </PopupButtonContainer>}
        </div>
      </div>
    </div>
  )
}

export default Popup