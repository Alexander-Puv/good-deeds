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
  const {token, isLoading} = useTypedSelector(state => state.auth)
  const {me, userError} = useTypedSelector(state => state.user)
  const {setIsLoading, setMe, setDeeds} = useActions()

  useEffect(() => {
    if (!me && token) {
      setMe(token)
    }
    if (!me
      && (!token || userError)
      && pathname !== '/authorization'
    ) {
      router.replace('/authorization')
    } else if (me && pathname === '/authorization') {
      router.replace('/')
    } else {
      setIsLoading(false)
    }

    me?.deeds && setDeeds(me.deeds)
    console.log(me?.tag);
  }, [me, token, pathname, userError]);

  if (isLoading) return <Loader />
  
  return children
}

export default LayoutProvider