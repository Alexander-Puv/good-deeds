'use client'

import Loader from '@/components/UI/Loader';
import useActions from '@/hooks/useActions';
import useTypedSelector from '@/hooks/useTypedSelector';
import '@/styles/globals.scss';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import store from '@/store';
import { Provider } from 'react-redux';

interface LayoutProps {
  children: React.ReactNode
}

const LayoutProvider = ({children}: LayoutProps) => {
  return (
    <Provider store={store}>
      <LoaderLayout children={children} />
    </Provider>
  )
}

const LoaderLayout = ({children}: LayoutProps) => {
  const router = useRouter()
  const pathname = usePathname()
  const {user, isLoading} = useTypedSelector(state => state.auth)
  const {setIsLoading} = useActions()

  useEffect(() => {
    if (!user && pathname !== '/authorization') {
      router.replace('/authorization')
    } else if (user && pathname === '/authorization') {
      router.replace('/')
    } else {
      setIsLoading(false)
    }
  }, [user, pathname]);

  if (isLoading) return <Loader />
  
  return children
}

export default LayoutProvider