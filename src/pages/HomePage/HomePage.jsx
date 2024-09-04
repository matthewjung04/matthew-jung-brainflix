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
  /* Add dynamic route for each currentVideo based on currentVideo id */
  const { videoId } = useParams();

  /* Create dynamic state variables for main currentVideo and next currentVideo details */
  let [currentVideo, setCurrentVideo] = useState({});
  let [videoList, setVideoList] = useState([]);
  let [data, setData] = useState([]);
  let [videoComments, setVideoComments] = useState([]);

  const fetchData = async () => {
    const videoData = await axios.get(url+ 'videos' + apiKey);
    setData(data=videoData.data);
  }
  useEffect(() => {fetchData()},[]);
  
  // console.log(data)
  const video = data.find((currentVideo) => currentVideo.id === videoId);
  
  /* UseEffect function for using axios to collect data from API */
  useEffect(() => {
    const fetchVideo = async ()=> {
      const videos = await axios.get(url+ 'videos' + apiKey);
      const nextVideoList = videos.data;
      const defaultList = nextVideoList.slice(1);
      // console.log(videoId)
      if(!videoId) {
        const defaultId = nextVideoList[0].id;
        const currentData = await axios.get(url + 'videos/' + defaultId + apiKey);
        
        setCurrentVideo(currentVideo=currentData.data)
        setVideoComments(videoComments=currentData.data.comments)
        setVideoList(videoList=defaultList);
      }
      else {
        const mainVideo = await axios.get(url + 'videos/' + videoId + apiKey);
        setCurrentVideo(currentVideo=mainVideo.data);
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
        />
      </section>
    </>
  )
}

export default HomePage