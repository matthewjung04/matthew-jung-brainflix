import data from '../../data/video-details.json'
import viewsIcon from '../../assets/images/icons/views.svg'
import likesIcon from '../../assets/images/icons/likes.svg'
import './VideoDetails.scss'

/* Default main video */
const defaultVideo = data[0];

/* Convert timestamp into mm/dd/yyyy date format */
const newDate = new Date(defaultVideo.timestamp);
const month = ("0" + (newDate.getMonth()+1)).slice(-2);
const date = ("0" + newDate.getDate()).slice(-2);
const year = newDate.getFullYear();

function VideoDetails() {
  return (
    <section className="details">
      <h1 className="details__title">{defaultVideo.title}</h1>
      <article className="details__box">
        <div className="details__box--left">
          <p className="details__box--left__channel">
            {"By " + defaultVideo.channel}
          </p>
          <p className="details__box--left__date">
            {
              month + "/" + date + "/" + year
            }
          </p>
        </div>
        <div className="details__box--right">
          <p className="details__box--right__views">
            <img className="details__box--right__image" src={viewsIcon}/>
            {defaultVideo.views}
          </p>
          <p className="details__box--right__likes">
            <img className="details__box--right__image" src={likesIcon}/>
            {defaultVideo.likes}
          </p>
        </div>
      </article>
      <p className="details__desc">{defaultVideo.description}</p>
    </section>
  )
}

export default VideoDetails