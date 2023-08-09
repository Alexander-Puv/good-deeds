import LayoutProvider from '@/components/LayoutProvider';
import '@/styles/globals.scss';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Good deeds',
  description: 'Good deeds. Make our World a better place.'
}

export default function RootLayout ({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="" />
      </head>
      <body>
        <LayoutProvider children={children} />
      </body>
    </html>
  )
}