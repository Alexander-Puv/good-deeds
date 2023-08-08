'use client'

import Loader from '@/components/Loader';
import useTypedSelector from '@/hooks/useActions';
import useActions from '@/hooks/useTypedSelector';
import cl from '@/styles/pages/main.module.scss';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Page() {
  const router = useRouter()
  const {isAuth, isLoading} = useTypedSelector(state => state.auth)
  const {setIsLoading} = useActions()

  useEffect(() => {
    if (!isAuth) {
      router.replace('/authorization')
    } else {
      setIsLoading(false)
    }
  }, [isAuth, router]);

  if (isLoading) return <Loader />

  return (
    <main className={cl.main}>Hello, Next.js!</main>
  )
}