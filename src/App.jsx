import { useState } from 'react'
import data from './data/video-details.json'
import Header from './components/Header/Header'
import MainVideo from './components/MainVideo/MainVideo'
import VideoDetails from './components/VideoDetails/VideoDetails'
import Comments from './components/Comments/Comments'
import NextVideoList from './components/NextVideoList/NextVideoList'
import './App.scss'

let currentVideo = data[0];
let videoList = data.slice(1);

function App() {
  return (
    <>
      <Header />
      <MainVideo 
        media={currentVideo}
      />
      <section id="sub-main">
        <div id="content">
          <VideoDetails
            media={currentVideo}
          />
          <Comments
            media={currentVideo}/>
        </div>
        <NextVideoList
          media={videoList}
        />
      </section>
    </>
  )
}

export default App