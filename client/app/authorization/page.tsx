'use client'

import useActions from '@/hooks/useActions';
import cl from '@/styles/pages/authorization.module.scss';
import { useRouter } from 'next/navigation';
import { KeyboardEvent, useState } from 'react';

export default function Page() {
  const router = useRouter()
  const [isLoginPage, setIsLoginPage] = useState(true);
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {login, signup} = useActions()

  const handleLogin = () => {
    if (email && password) {
      login(email)
      router.replace('/')
    }
  }

  const handleSignup = () => {
    if (email && username && password) {
      signup(username, email)
      router.replace('/')
    }
  }

  const enterHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    e.key === 'Enter' && (isLoginPage ? handleLogin : handleSignup)
  }

  return (
    <main className={cl.main}>

      <input className={cl.input} placeholder='Email' type='email'
        value={email} onChange={e => setEmail(e.currentTarget.value)}
        onKeyDown={enterHandler} />

      {!isLoginPage && <input className={cl.input} placeholder='Username'
        value={username} onChange={e => setUsername(e.currentTarget.value)}
        onKeyDown={enterHandler} />}

      <input className={cl.input} placeholder='Password' type='password'
        value={password} onChange={e => setPassword(e.currentTarget.value)}
        onKeyDown={enterHandler} />

      <div className={cl.bottom}>
        <a className={cl.switch} onClick={() => setIsLoginPage(is => !is)}>
          {isLoginPage ?
            "Don't have an account yet?"
          : "Already have an account?"
          }
        </a>

        <button className={cl.enter} onClick={isLoginPage ? handleLogin : handleSignup}>
          {isLoginPage ?
            'Log in'
          : 'Sign up'
          }
        </button>
      </div>

    </main>
  )
}