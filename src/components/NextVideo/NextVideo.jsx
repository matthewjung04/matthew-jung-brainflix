import './NextVideo.scss'

function NextVideo({image, title, channel}) {
  return (
    <article className="video">
      <img className="video__image" src={image}/>
      <div className="video__text">
        <h2 className="video__text__title">{title}</h2>
        <p className="video__text__channel">{channel}</p>
      </div>
    </article>
  )
}

export default NextVideo