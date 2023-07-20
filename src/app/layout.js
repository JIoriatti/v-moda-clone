import './globals.css'
import { Inter } from 'next/font/google'
import FixedHeader from '@/components/FixedHeader'
import DynamicHeader from '@/components/DynamicHeader'
import ReducerProvider from '../../utils/reducerContext'
import HeaderWrapper from '@/components/HeaderWrapper'

export const metadata = {
  title: 'V-Moda Website Clone',
  description: 'A recreation of the V-Moda website.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body>
          <ReducerProvider>
            <HeaderWrapper>
              <DynamicHeader />
              <FixedHeader />
            </HeaderWrapper>
            {children}
          </ReducerProvider>
        </body>
    </html>
  )
}
