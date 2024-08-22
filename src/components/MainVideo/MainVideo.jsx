import data from '../../data/video-details.json'
import './MainVideo.scss'

/* Default main video */
const defaultVideo = data[0];

function MainVideo() {
  return (
    <video className="main-video" poster={defaultVideo.image} controls>
      <source src={defaultVideo.video} />
    </video>
  )
}

export default MainVideo