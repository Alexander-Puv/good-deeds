'use client'

import Header from '@/components/Header';
import TagPopup from '@/components/TagPopup';
import useTypedSelector from '@/hooks/useTypedSelector';
import cl from '@/styles/pages/main.module.scss';
import { useState } from 'react';

export default function Page() {
  const {userData} = useTypedSelector(state => state.auth)
  const [popup, setPopup] = useState(false)

  return (
    <main className={cl.main}>
      <TagPopup {...{popup, setPopup}} />

      <Header />
      <h1>{userData?.username}</h1>
    </main>
  )
}