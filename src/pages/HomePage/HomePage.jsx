import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { url, apiKey} from '../../utils/utils.jsx'
import MainVideo from '../../components/MainVideo/MainVideo'
import VideoDetails from '../../components/VideoDetails/VideoDetails'
import Comments from '../../components/Comments/Comments'
import NextVideoList from '../../components/NextVideoList/NextVideoList'
import './HomePage.scss'

function HomePage() {
  /* Create dynamic state variables for main currentVideo and next currentVideo details */
  let [currentVideo, setCurrentVideo] = useState({});
  let [videoList, setVideoList] = useState([]);
  let [videoComments, setVideoComments] = useState([]);
  let [videoId, setVideoId] = useState(0)
  let [isLoading, setIsLoading] = useState(false);

  const clickHandler = (event) => {
    setVideoId(videoId=event.target.parentElement.id);
  }
 
  useEffect(() => {
    const fetchVideo = async ()=> {
      const response = await axios.get(url+ 'videos' + apiKey);
    
      if(!isLoading) {
        const currentData = await axios.get(`${url}videos/${response.data[0].id + apiKey}`);
        
        setCurrentVideo(currentVideo=currentData.data)
        setVideoComments(videoComments=currentData.data.comments)
        setVideoList(videoList=response.data.slice(1))

        setIsLoading(isLoading=true)
      }
      if(isLoading && videoId !== 0) {
        const mainVideo = await axios.get(`${url}videos/${videoId + apiKey}`)
        const index = videoList.findIndex(video => video.id == mainVideo.data.id)
        videoList[index] = currentVideo

        setCurrentVideo(currentVideo=mainVideo.data)
        setVideoComments(videoComments=mainVideo.data.comments)
      }
    }
    fetchVideo();
  }, [videoId])
  
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
            media={videoComments}
          />
        </div>
        <NextVideoList
          media={videoList}
          click={clickHandler}
        />
      </section>
    </>
  )
}

export default HomePage