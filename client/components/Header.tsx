'use client'

import cl from '@/styles/components/Header.module.scss'
import { useState } from 'react'
import { FiUser } from 'react-icons/fi'
import TagPopup from './TagPopup'

const Header = () => {
  const [popup, setPopup] = useState(false)

  return <>
    <TagPopup {...{popup, setPopup}} />
    <header className={cl.header}>
      <div className={cl.svgParent} onClick={() => setPopup(true)}>
        <FiUser />
      </div>
      <h1>Good Deeds</h1>
    </header>
  </>
}

export default Header