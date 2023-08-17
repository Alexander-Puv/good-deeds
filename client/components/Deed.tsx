import useActions from '@/hooks/useActions';
import useTypedSelector from '@/hooks/useTypedSelector';
import cl from '@/styles/pages/main.module.scss';
import IDeed from '@/types/deed';
import { useState } from 'react';
import { AiFillDelete, AiOutlineCheck } from 'react-icons/ai';
import { BsPenFill } from 'react-icons/bs';

const Deed = ({deed}: {deed: IDeed}) => {
  const {me} = useTypedSelector(state => state.user)
  const {toggleDeedChecked, setDeedText, deleteDeed} = useActions()
  const {token} = useTypedSelector(state => state.auth)
  const [text, setText] = useState(deed.text)
  const [isIconChange, setIsIconChange] = useState(false)
  const isMyDeed = me?.id === deed.userId
  
  if (!token) return <></> // cannot be null

  const changeChecked = () => {
    isMyDeed && toggleDeedChecked(token, deed.id, !deed.checked)
  }

  const changeText = () => {
    setIsIconChange(is => {
      is && setDeedText(token, deed.id, text)
      return !is
    })
  }

  return (
    <div className={cl.item}>
      <span
        className={cl.itemSpan}
        aria-checked={deed.checked}
        onClick={changeChecked}
      >
        <AiOutlineCheck />
      </span>
      {!isIconChange ?
        <p className={cl.itemText}>
          {text}
        </p>
      : <input value={text} onChange={e => setText(e.target.value)} />
      }
      {isMyDeed && <>
        <span className={cl.itemIcon} onClick={changeText}>
          {!isIconChange ?
            <BsPenFill />
          : <AiOutlineCheck />
          }
        </span>
        <span className={cl.itemIcon} onClick={() => deleteDeed(token, deed.id)}>
          <AiFillDelete />
        </span>
      </>}
    </div>
  )
}

export default Deed