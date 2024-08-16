import { useState } from 'react'
import Header from './components/Header/Header'
import NextVideoList from './components/NextVideoList/NextVideoList'
import './App.scss'

function App() {
  return (
    <>
      <Header />
      <NextVideoList />
    </>
  )
}

export default App