'use client'

import Header from '@/components/Header';
import TagPopup from '@/components/TagPopup';
import useTypedSelector from '@/hooks/useTypedSelector';
import cl from '@/styles/pages/main.module.scss';
import IDeed from '@/types/deed';
import { useState } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';

const staticDeeds: IDeed[] = [
  {id: '1', checked: false, text: 'Deed 1'},
  {id: '2', checked: true, text: 'Deed 2'},
  {id: '3', checked: false, text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium provident minus tenetur non architecto fuga pariatur.
  Praesentium id itaque eveniet obcaecati repellat corrupti esse suscipit similique consequuntur velit. Similique, accusamus!`}
]

export default function Page() {
  const {userData} = useTypedSelector(state => state.auth)
  const [popup, setPopup] = useState(false)
  const [deeds, setDeeds] = useState(staticDeeds)

  const clickHandler = (deedToUpdate: IDeed) => {
    const updatedDeeds = (deeds: IDeed[]) => deeds.map(deed => {
      if (deed.id === deedToUpdate.id) {
        return { ...deed, checked: !deed.checked }
      }
      return deed
    })

    setDeeds(deeds => updatedDeeds(deeds));
  }

  return (
    <main className={cl.main}>
      <TagPopup {...{popup, setPopup}} />

      <Header />
      <section className={cl.list}>
        {deeds.map(deed =>
          <div className={cl.item} key={deed.id}>
            <span aria-checked={deed.checked} onClick={() => clickHandler(deed)}>
              <AiOutlineCheck />
            </span>
            <p className={cl.text}>{deed.text}</p>
          </div>
        )}
      </section>
    </main>
  )
}