'use client'

import Popup from '@/components/UI/Popup';
import useTypedSelector from '@/hooks/useTypedSelector';
import cl from '@/styles/pages/main.module.scss';

export default function Page() {
  const {userData} = useTypedSelector(state => state.auth)

  return (
    <main className={cl.main}>
      {!userData?.tag &&
        <Popup title='Do you want change' btns='OK' />}
      {userData?.username}
    </main>
  )
}