'use client'

import Header from '@/components/Header';
import TagPopup from '@/components/TagPopup';
import useActions from '@/hooks/useActions';
import useTypedSelector from '@/hooks/useTypedSelector';
import cl from '@/styles/pages/main.module.scss';
import { useState } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';

export default function Page() {
  const {deeds} = useTypedSelector(state => state)
  const {toggleDeedChecked, setDeedText} = useActions()
  const [popup, setPopup] = useState(false)

  return (
    <main className={cl.main}>
      <TagPopup {...{popup, setPopup}} />

      <Header />
      <section className={cl.list}>
        {deeds.map(deed =>
          <div className={cl.item} key={deed.id}>
            <span aria-checked={deed.checked} onClick={() => toggleDeedChecked(deed.id)}>
              <AiOutlineCheck />
            </span>
            <p className={cl.text}>{deed.text}</p>
          </div>
        )}
      </section>
    </main>
  )
}