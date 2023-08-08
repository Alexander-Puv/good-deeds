'use client'

import cl from '@/styles/pages/authorization.module.scss'
import React, { useState } from 'react'

export default function Page() {
  const [isLoginPage, setIsLoginPage] = useState(true);
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <main className={cl.main}>

      <input className={cl.input} placeholder='Username'
        value={username} onChange={e => setUsername(e.currentTarget.value)} />

      <input className={cl.input} placeholder='Password'
        value={password} onChange={e => setPassword(e.currentTarget.value)} />

      <div className={cl.bottom}>
        <a className={cl.switch} onClick={() => setIsLoginPage(is => !is)}>
          {isLoginPage ?
            "Don't have an account yet?"
          : "Already have an account?"
          }
        </a>

        <button className={cl.enter}>
          {isLoginPage ?
            'Log in'
          : 'Sign up'
          }
        </button>
      </div>

    </main>
  )
}