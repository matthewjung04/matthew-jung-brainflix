import { useState } from 'react'
import data from './data/video-details.json'
import Header from './components/Header/Header'
import MainVideo from './components/MainVideo/MainVideo'
import VideoDetails from './components/VideoDetails/VideoDetails'
import Comments from './components/Comments/Comments'
import NextVideoList from './components/NextVideoList/NextVideoList'
import './App.scss'

function App() {
  let [currentVideo, setCurrentVideo] = useState(data[0]);
  let [videoList, setVideoList] = useState(data.slice(1));
  
  const clickhandler = (event) => {
    const targetID = event.target.parentElement.id
    const newVideo = data.filter((video) => video.id==targetID)
    const index = videoList.indexOf(newVideo[0])
    videoList[index]=currentVideo
    setCurrentVideo(currentVideo=newVideo[0])
  }

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
          click={clickhandler}
        />
      </section>
    </>
  )
}

export default App