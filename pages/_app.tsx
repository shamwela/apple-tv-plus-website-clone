import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { SFProDisplay } from '@/features/font/sf-pro-display/SFProDisplay'
import { SFProText } from '@/features/font/sf-pro-text/SFProText'
import { useState, useEffect } from 'react'

const App = ({ Component, pageProps }: AppProps) => {
  const [isServer, setIsServer] = useState(true)
  useEffect(() => setIsServer(false), [])

  if (isServer) {
    return null
  }

  return (
    <div className={`${SFProDisplay.variable} ${SFProText.variable} font-sans`}>
      {typeof window === 'undefined' ? null : <Component {...pageProps} />}
    </div>
  )
}

export default App
