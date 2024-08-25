import './MainVideo.scss'

function MainVideo({media}) {
  return (
    <video className="main-video" poster={media.image} controls>
      <source src={media.video} />
    </video>
  )
}

export default MainVideo