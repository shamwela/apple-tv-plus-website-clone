import { AppleTVPage } from '@/features/apple-tv-page/AppleTVPage'
import { MainPage } from '@/features/main-page/MainPage'
import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

const App = () => (
  <BrowserRouter>
    <div className='flex flex-col items-center gap-y-4 border p-4'>
      <span className='font-display text-2xl font-medium'>Links</span>
      <Link to='/'>Main page</Link>
      <Link to='/apple-tv'>Apple TV page</Link>
    </div>
    <Routes>
      <Route path='/apple-tv' element={<AppleTVPage />} />
      <Route path='/' element={<MainPage />} />
    </Routes>
  </BrowserRouter>
)

export default App
