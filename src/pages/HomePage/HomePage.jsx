import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import data from '../../data/video-details.json'
import MainVideo from '../../components/MainVideo/MainVideo'
import VideoDetails from '../../components/VideoDetails/VideoDetails'
import Comments from '../../components/Comments/Comments'
import NextVideoList from '../../components/NextVideoList/NextVideoList'
import './HomePage.scss'

function HomePage() {
  /* Add dynamic route for each currentVideo based on currentVideo id */
  const { videoID } = useParams();

  /* Create dynamic state variables for main currentVideo and next currentVideo details */
  let [currentVideo, setCurrentVideo] = useState(data[0]);
  let [videoList, setVideoList] = useState(data.slice(1));
  let [videoId, setVideoId] = useState(0);

  // const video = data.find((currentVideo) => currentVideo.id === videoID)

  /* Event handler for changing main currentVideo to next currentVideo when clicked */
  const clickhandler = (event) => {
    setVideoId(videoId = event.target.parentElement.id)
    // const targetID = event.target.parentElement.id
    // const newVideo = data.filter((currentVideo) => currentVideo.id==targetID)
    // const index = videoList.indexOf(newVideo[0])
    // videoList[index]=currentVideo
    // setCurrentVideo(currentVideo=newVideo[0])
  }
  console.log(videoId);

  /* UseEffect function for using axios to collect data from API */
  useEffect(() => {
    

  }, [videoID])

  return (
    <>
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

export default HomePage