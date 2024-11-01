import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { baseURL, getVideoAPI } from '../../utils/utils.jsx'
import MainVideo from '../../components/MainVideo/MainVideo'
import VideoDetails from '../../components/VideoDetails/VideoDetails'
import Comments from '../../components/Comments/Comments'
import NextVideoList from '../../components/NextVideoList/NextVideoList'
import './HomePage.scss'

function HomePage() {
  let [currentVideo, setCurrentVideo] = useState({});
  let [videoData, setVideoData] = useState([]);
  let [videoList, setVideoList] = useState([]);
  let [videoComments, setVideoComments] = useState([]);
  let [videoId, setVideoId] = useState(0);
  let [commentId, setCommentId] = useState(0);
  let [selected, setSelected] = useState(false);
  let [postedComment, setPostedComment] = useState("");
  let [hasLike, setHasLike] = useState(false);
  
  /* React States for double checking axios reponses */
  let [newData, setNewData] = useState({});
  let [updatedData, setUpdatedData] = useState({});
  let [deleteData, setDeleteData] = useState({});
  let [updatedDeleteData, setUpdatedDeleteData] = useState({});
  let [likes, setLikes] = useState({});
  let [updatedLikes, setUpdatedLikes] = useState({});

  /* ClickHandler extracts the id of the video clicked but does not trigger any changes*/
  const clickHandler = (event) => {
    setVideoId(videoId=event.target.parentElement.id);
  }

  const {id} = useParams();
  if(videoId==0 && id){
    setVideoId(videoId=id)
  }
  
  /* UseEffect triggers when videoId is updated by clickHandler */
  useEffect(() => {
    const fetchVideo = async ()=> {
      /* Extracts list of all videos in API data */
      
      await axios
        .get(`${baseURL}/videos`)
        .then((response) => {
          setVideoData(videoData=response)
        })
   
      if(videoId == 0 && !id) {
        
        await axios
        .get(`${baseURL}/videos`)
        .then((response) => {
          setVideoData(videoData=response)
        })

        getVideoAPI(videoData.data[0].id, setCurrentVideo, setVideoComments);
        setVideoId(videoId=videoData.data[0].id);

        setVideoList(videoList=videoData.data.slice(1));

      } else if(videoId !== 0) {
        getVideoAPI(videoId, setCurrentVideo, setVideoComments)

        if(videoList.length == 0){
          const tempList = videoData.data
          const index = tempList.findIndex(video => video.id == id)
          tempList.splice(index,1)
          setVideoList(videoList=tempList)
        }
     
        const index = videoList.findIndex(video => video.id == videoId)
        videoList[index] = currentVideo;
      }
    }
    fetchVideo();
    
  }, [videoId])
  
  /* Extracts posted comment from user input */
  const postHandler = (e) => {
    e.preventDefault()
    const message = e.target.message.value;

    if(!message) {
      const messageInput = e.target.querySelector('textarea');
      messageInput.classList.add('empty-comment');
      alert('All fields must be filled in')
    } else if (message) {
      setPostedComment(postedComment=message);
    }
  }

  /* UseEffect triggers when postedComment is updated by postHandler */
  useEffect (() => {
    const postComment = async () => {
      if(postedComment !== "") {
        await axios
          .post(
            (`${baseURL}/videos/${videoId}/comments`),
            {"name": "BrainStation", "comment": postedComment}
          )
          .then((response) => {
            setNewData(newData=response.data)
            
          })
      } 
    }
    postComment();
  },[postedComment])
  
  /* Secondary check before posting comment */
  useEffect(() => {
    setUpdatedData(updatedData=newData),
    videoComments.unshift(updatedData),
    setPostedComment(postedComment = "")
  },[newData])

  /* Extracts id of deleted comment */
  const deleteHandler = (e) => {
    setCommentId(commentId=e.target.id);
    setSelected(selected=true);
  }

  /* UseEffect triggers when commentId is updated by deleteHandler */
  useEffect(() => {
    const deleteComment = async () => {
      if(selected) {
        await axios
          .delete(`${baseURL}/videos/${videoId}/comments/${commentId}`)
          .then((response) => {
            setDeleteData(deleteData=response.data);
          })
      } 
    }
    deleteComment();
  },[commentId])

  /* Secondary check before deleting comment */
  useEffect(() => {
    setUpdatedDeleteData(updatedDeleteData=deleteData);
    const deletedId = updatedDeleteData.id;
    const deleteIndex = videoComments.findIndex(deleted => deleted.id == deletedId)
    videoComments.splice(deleteIndex,1)
  },[deleteData])

  /* Trigger like button */
  const likeHandler = () => {
    setHasLike(hasLike=true)
  }

  useEffect(() => {
    const incrementLikes = async () => {
      if(hasLike) {
        await axios
        .put(`${baseURL}/videos/${videoId}/likes`)
        .then((response) => {
          setLikes(likes=response.data)
        })
        .then(
          setHasLike(hasLike=false)
        )
      }
    }
    incrementLikes();
  },[hasLike])

  useEffect(() => {
    setUpdatedLikes(updatedLikes=likes)
    setCurrentVideo(currentVideo=updatedLikes)
  },[likes])

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
            likes={likeHandler}
          />
          {/* Comments generates the comments of the main video using videoComponents as its prop */}
          <Comments
            media={videoComments}
            deleted={deleteHandler}
            posted={postHandler}
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