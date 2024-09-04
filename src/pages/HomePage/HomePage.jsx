import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { url, apiKey} from '../../utils/utils.jsx'
import data from '../../data/video-details.json'
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
  fetchData();
  
  const video = data.find((currentVideo) => currentVideo.id === videoId);
 
  /* Event handler for changing main currentVideo to next currentVideo when clicked */
  // const clickhandler = (event) => {
  //   setVideoId(videoId = event.target.parentElement.id)
  //   // const targetID = event.target.parentElement.id
  //   // const newVideo = data.filter((currentVideo) => currentVideo.id==targetID)
  //   // const index = videoList.indexOf(newVideo[0])
  //   // videoList[index]=currentVideo
  //   // setCurrentVideo(currentVideo=newVideo[0])
  // }
  // console.log(videoId);

  /* UseEffect function for using axios to collect data from API */
  useEffect(() => {
    const fetchVideo = async ()=> {
      const videos = await axios.get(url+ 'videos' + apiKey);
      const nextVideoList = videos.data;
      
      if(video == undefined) {
        const currentId = nextVideoList[0].id;
        const currentData = await axios.get(url + 'videos/' + currentId + apiKey);
        
        setCurrentVideo(currentVideo=currentData.data)
        setVideoComments(videoComments=currentData.data.comments)
        setVideoList(videoList=nextVideoList.slice(1));
      }
      // else {
        
        
      // }
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
          // click={clickhandler}
        />
      </section>
    </>
  )
}

export default HomePage