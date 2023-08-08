'use client'

import store from '@/store';
import wrapper from '@/store';
import '@/styles/globals.scss';
import { Metadata } from 'next';
import { AppProps } from 'next/app';
import {Provider} from 'react-redux';

interface RootLayout extends AppProps {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: 'Good deeds',
  description: 'Good deeds. Make our World a better place.'
}

export default function RootLayout ({children}: RootLayout) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="" />
      </head>
      <body>
        <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html>
  )
}