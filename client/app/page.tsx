'use client'

import Deed from '@/components/Deed';
import Header from '@/components/Header';
import TagPopup from '@/components/TagPopup';
import useActions from '@/hooks/useActions';
import useTypedSelector from '@/hooks/useTypedSelector';
import cl from '@/styles/pages/main.module.scss';
import { useEffect, useState } from 'react';
import { AiOutlinePlus, AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';

export default function Page() {
  const {me, friend} = useTypedSelector(state => state.user)
  const {deeds} = useTypedSelector(state => state)
  const {token} = useTypedSelector(state => state.auth)
  const {addDeed, getUserByTag, removeFriend} = useActions()
  const [popup, setPopup] = useState(false)
  const [text, setText] = useState('')
  const [friendTag, setFriendTag] = useState('')

  useEffect(() => {
    !me?.tag && setPopup(true)
  }, [])

  if (!token) return <></> // cannot be null

  const addDeedHandler = () => {
    addDeed(token, text)
    setText('')
  }

  const findFriend = () => {
    getUserByTag(friendTag)
  }

  const closeFriend = () => {
    removeFriend()
  }

  return (
    <main className={cl.main}>
      <TagPopup {...{popup, setPopup}} />

      <Header />
      <div className={cl.friend}>
        <div className={cl.friendTop}>
          <h2>
            {!friend ?
              'Find friends and watch their deeds'
            : `You are visiting ${friend.username}`
            }
          </h2>
          {friend && <span className={cl.friendClose} onClick={closeFriend}>
            <AiOutlineClose />
          </span>}
        </div>
        <div className={cl.friendInput}>
          <span className={cl.friendTag}>@</span>
          <input value={friendTag} onChange={e => setFriendTag(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && findFriend}/>
          <span className={cl.friendSearch} onClick={findFriend}>
            <AiOutlineSearch />
          </span>
        </div>
      </div>
      <section className={cl.list}>
        <div className={`${cl.item} ${cl.addItem}`}>
          <input value={text} onChange={e => setText(e.target.value)}  />
          <span onClick={addDeedHandler}>
            <AiOutlinePlus />
          </span>
        </div>
        
        {!friend ?
          deeds.map(deed =>
            <Deed deed={deed} key={deed.id} />
          )
        : friend.deeds?.map(deed =>
          <Deed deed={deed} key={deed.id} />
        )
        }
      </section>
    </main>
  )
}