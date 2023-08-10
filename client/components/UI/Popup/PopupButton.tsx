import cl from '@/styles/components/UI/Popup/PopupButton.module.scss'
import { MouseEvent, ReactNode, FC } from 'react'

export interface PopupButtonProps {
  text: ReactNode,
  open: {
    state: boolean,
    setState: (prop: boolean) => void
  },
  active?: boolean,
  decline?: boolean,
  onClick?: (e: MouseEvent<HTMLButtonElement, MouseEventInit>) => void
}

export const PopupButtonContainer = ({children}: {children: ReactNode}) => {
  return <div className={cl.buttonContainer}>
    {children}
  </div>
}

const PopupButton: FC<PopupButtonProps> = ({text, open, active, decline, onClick}) => {
  const declineClass = decline ? cl.decline : ''
  const isActive = active === undefined ? true : active

  const clickHandler = (e: MouseEvent<HTMLButtonElement, MouseEventInit>) => {
    if (isActive) {
      onClick && onClick(e)
      open.setState(false)
    }
  }

  return (
    <button className={`${cl.button} ${declineClass}`} disabled={!isActive} onClick={clickHandler}>
      {text}
    </button>
  )
}

export default PopupButton