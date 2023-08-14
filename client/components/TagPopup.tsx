'use client'

import Popup from '@/components/UI/Popup/Popup';
import useTypedSelector from '@/hooks/useTypedSelector';
import cl from '@/styles/components/TagPopup.module.scss';
import IUser from '@/types/auth';
import { ChangeEvent, useEffect, useState } from 'react';

interface TagPopupProps {
  popup: boolean,
  setPopup: (prop: boolean) => void
}

const TagPopup = ({popup, setPopup}: TagPopupProps) => {
  const {user} = useTypedSelector(state => state.auth)
  const [tag, setTag] = useState('')
  const [errors, setErrors] = useState<string[]>([])

  useEffect(() => {
    !user?.tag && setPopup(true)
  }, [])

  const validateTag = (tag: string) => {
    const lengthPattern = /^.{5,25}$/
    const spacePattern = /\s/
    const specCharPattern = /^[!.$*-_a-zA-Z0-9]*$/
    
    const newErrors = []

    if (!lengthPattern.test(tag)) {
      newErrors.push('Tag should be between 5 and 25 characters.')
    }
  
    if (spacePattern.test(tag)) {
      newErrors.push('Tag should not contain spaces.')
    }
  
    if (!specCharPattern.test(tag)) {
      newErrors.push('Tag should only contain !, ., $, *, -, _, letters, and digits.')
    }
  
    setErrors(newErrors)
  }

  const handleTagChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newTag = e.currentTarget.value
    setTag(newTag)
    validateTag(newTag)
  }

  const acceptClickHandler = () => {
    const user: IUser = JSON.parse(localStorage.getItem('user-data') as string)
    localStorage.setItem('user-data', JSON.stringify({...user, tag: `@${tag}`} as IUser))
  }

  return (
    <Popup title='Add tag to find friends!'
      open={{state: popup, setState: setPopup}}
      btns={{
        declineBtn: {text: 'decline'},
        acceptBtn: {active: !errors.length && !!tag, text: 'Submit', onClick: acceptClickHandler}
      }}>
      <span className='divider' />
      <div className={cl.tagInput}>
        <span>@</span>
        <input placeholder='Tag'
          value={tag} onChange={handleTagChange} />
      </div>
      {errors.length ? <div className={cl.errors}>
        {errors.map(e =>
          <div>{e}</div>
        )}
      </div> : ''}
      <span className='divider' />
    </Popup>
  )
}

export default TagPopup