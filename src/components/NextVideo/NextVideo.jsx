import './NextVideo.scss'

/* Generates video in next video list based on props from array map in NextVideoList component */
/* Entire container has onClick fuunctionality so videoDetailsPage is updated
when any of video poster, channel, or title is clicked */
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