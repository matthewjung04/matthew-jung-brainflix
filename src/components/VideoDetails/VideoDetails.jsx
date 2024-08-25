import viewsIcon from '../../assets/images/icons/views.svg'
import likesIcon from '../../assets/images/icons/likes.svg'
import './VideoDetails.scss'

function VideoDetails({media}) {
  /* Convert timestamp into mm/dd/yyyy date format */
  const newDate = new Date(media.timestamp);
  const localDate = newDate.toLocaleDateString();

  return (
    <section className="details">
      <h1 className="details__title">{media.title}</h1>
      <article className="details__box">
        <div className="details__box--left">
          <p className="details__box--left__channel">
            {"By " + media.channel}
          </p>
          <p className="details__box--left__date">{localDate}</p>
        </div>
        <div className="details__box--right">
          <p className="details__box--right__views">
            <img className="details__box--right__image" src={viewsIcon}/>
            {media.views}
          </p>
          <p className="details__box--right__likes">
            <img className="details__box--right__image" src={likesIcon}/>
            {media.likes}
          </p>
        </div>
      </article>
      <p className="details__desc">{media.description}</p>
    </section>
  )
}

export default VideoDetails