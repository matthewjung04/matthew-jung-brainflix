import './MainVideo.scss'

/* Initially diplays the first video as default main video in homepage */
/* Displays the selected video in the main page section */
function MainVideo({media}) {

  return (
    <video className="main-video" src={media.video}
    poster={media.image} controls>
    </video>
  )
}

export default MainVideo