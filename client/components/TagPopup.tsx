'use client'

import Popup from '@/components/UI/Popup/Popup';
import PopupButton, { PopupButtonContainer } from '@/components/UI/Popup/PopupButton';
import useTypedSelector from '@/hooks/useTypedSelector';
import cl from '@/styles/components/TagPopup.module.scss';
import { useEffect, useState, ChangeEvent } from 'react';

const TagPopup = () => {
  const {userData} = useTypedSelector(state => state.auth)
  const [popup, setPopup] = useState(false)
  const [tag, setTag] = useState('')
  const [errors, setErrors] = useState<string[]>([])
  let typingTimer: NodeJS.Timeout

  useEffect(() => {
    !userData?.tag && setPopup(true)
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
    clearTimeout(typingTimer)
    
    const newTag = e.currentTarget.value
    setTag(newTag)

    typingTimer = setTimeout(() => {
      validateTag(newTag)
    }, 1000)
  }

  return (
    <Popup title='Add tag to find friends!' open={{state: popup, setState: setPopup}}>
      <span className='divider'></span>
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
      <span className='divider'></span>
      <PopupButtonContainer>e
        <PopupButton active={!errors.length}>Submit</PopupButton>
      </PopupButtonContainer>
    </Popup>
  )
}

export default TagPopup