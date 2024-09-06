import { useState, useEffect } from 'react'
import axios from 'axios'
import { url, apiKey} from '../../utils/utils.jsx'
import MainVideo from '../../components/MainVideo/MainVideo'
import VideoDetails from '../../components/VideoDetails/VideoDetails'
import Comments from '../../components/Comments/Comments'
import NextVideoList from '../../components/NextVideoList/NextVideoList'
import './HomePage.scss'

function HomePage() {
  /* Create dynamic state variables for main currentVideo, video comments, and next currentVideo details */
  let [currentVideo, setCurrentVideo] = useState({});
  let [videoList, setVideoList] = useState([]);
  let [videoComments, setVideoComments] = useState([]);
  /* Create dynamic state variable for videoId which changes everytime specific video is clicked */
  let [videoId, setVideoId] = useState(0)
  /* Create dynamic state variable for checking whether the homepage has loaded or not */
  let [isLoading, setIsLoading] = useState(false);

  /* ClickHandler extracts the id of the video clicked but does not trigger any changes*/
  const clickHandler = (event) => {
    setVideoId(videoId=event.target.parentElement.id);
  }
 
  /* UseEffect triggers when videoId is updated by clickHandler */
  useEffect(() => {
    const fetchVideo = async ()=> {
      /* Extracts list of all videos in API data */
      const videoData = await axios.get(url+ 'videos' + apiKey);
      
      if(!isLoading) { /* Only runs when isLoading is false or in default state */
        await axios
          .get(`${url}videos/${videoData.data[0].id + apiKey}`) /* Extracts video details of default video */
          .then((response) => { /* Wait for get request to be complete before updating states */
            setCurrentVideo(currentVideo=response.data)
            setVideoComments(videoComments=response.data.comments)
            setVideoList(videoList=videoData.data.slice(1))
          })
          .then(() => { /* Only change isLoading to true afte all states have been updated */
            setIsLoading(isLoading=true)
          })
        ;
      }
      if(isLoading && videoId !== 0) { /* Only runs when isLoading is true and videoId contains id value */
        await axios
          .get(`${url}videos/${videoId + apiKey}`) /* get specific video data based on id of 'clicked' video */
          .then((response) => { /* Only update page when get request is complete */
            const index = videoList.findIndex(video => video.id == response.data.id)
            videoList[index] = currentVideo

            setCurrentVideo(currentVideo=response.data)
            setVideoComments(videoComments=response.data.comments)
          })
        ;
      }
    }
    fetchVideo();
  }, [videoId]) /* This useEffect only runs when videoId is updated by clickHandler */
  
  return (
    <>
      {/* MainVideo generates the main video using currentVideo as its prop */}
      <MainVideo 
        media={currentVideo}
      />
      <section id="sub-main">
        <div id="content">
          {/* VideoDetails generates the details of the main video using currentVideo as its prop */}
          <VideoDetails
            media={currentVideo}
          />
          {/* Comments generates the comments of the main video using videoComponents as its prop */}
          <Comments
            media={videoComments}
          />
        </div>
        {/* NextVideoList uses videoList prop to generate the next video list 
        and clickHandler function as prop for onClick functionality of each video */}
        <NextVideoList
          media={videoList}
          click={clickHandler}
        />
      </section>
    </>
  )
}

export default HomePage