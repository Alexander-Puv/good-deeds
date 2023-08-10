'use client'

import TagPopup from '@/components/TagPopup';
import useTypedSelector from '@/hooks/useTypedSelector';
import cl from '@/styles/pages/main.module.scss';

export default function Page() {
  const {userData} = useTypedSelector(state => state.auth)

  return (
    <main className={cl.main}>
      <TagPopup />
      <h1>{userData?.username}</h1>
    </main>
  )
}