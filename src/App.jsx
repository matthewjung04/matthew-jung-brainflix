import { useState } from 'react'
import Header from './components/Header/Header'
import NextVideoList from './components/NextVideoList/NextVideoList'
import MainVideo from './components/MainVideo/MainVideo'
import './App.scss'

function App() {
  return (
    <>
      <Header />
      <MainVideo />
      <NextVideoList />
    </>
  )
}

export default App