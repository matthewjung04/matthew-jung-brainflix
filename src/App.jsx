import { useState } from 'react'
import Header from './components/Header/Header'
import MainVideo from './components/MainVideo/MainVideo'
import VideoDetails from './components/VideoDetails/VideoDetails'
import Comments from './components/Comments/Comments'
import NextVideoList from './components/NextVideoList/NextVideoList'

import './App.scss'

function App() {
  return (
    <>
      <Header />
      <MainVideo />
      <section id="sub-main">
        <div id="content">
          <VideoDetails />
          <Comments />
        </div>
        <NextVideoList />
      </section>

      
    </>
  )
}

export default App