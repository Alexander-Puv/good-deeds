import cl from '@/styles/components/UI/Popup.module.scss'
import React from 'react'

interface PopupProps {
  title: string,
  content?: React.ReactNode,
  btns: string | { // one button (like 'OK, I understood')
    acceptBtn: string,
    declineBtn: string
  } // or two buttons to accept or decline somthing
}

const Popup = ({title, content, btns}: PopupProps) => {
  return (
    <div className={cl.popupContainer}>
      <div className={cl.popup}>
        <h2 className={cl.title}>{title}</h2>
        <div className={cl.content}>{content}</div>
        <div className={cl.btns}>
          {typeof btns === 'string' ?
            <button className={cl.btn}></button>
          : <>
            <button className={`${cl.btn} ${cl.acceptBtn}`}>{btns.acceptBtn}</button>
            <button className={`${cl.btn} ${cl.declineBtn}`}>{btns.declineBtn}</button>
          </>}
        </div>
      </div>
    </div>
  )
}

export default Popup