import './NextVideo.scss'

function NextVideo({id, image, title, channel, clicked}) {
  return (
    <div className="video" id={id} onClick={clicked}>
      <img className="video__image" src={image}/>
      <div className="video__text" id={id}>
        <h2 className="video__text__title">{title}</h2>
        <p className="video__text__channel">{channel}</p>
      </div>
    </div>
  )
}

export default NextVideo