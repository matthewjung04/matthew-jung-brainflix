import data from '../../data/video-details.json'
import './NextVideo.scss'

export let currentVideo = data[0];

const clickhandler = (event) => {
  const targetID = event.target.parentElement.id
  
  let index = 0;
  for (let i=0; i<data.length; i++) {
    if(data[i].id === targetID) {
      currentVideo = data[i];
    }
  }
  console.log(currentVideo)
}

function NextVideo({id, image, title, channel}) {
  return (
    <div className="video" id={id} onClick={clickhandler}>
      <img className="video__image" src={image}/>
      <div className="video__text">
        <h2 className="video__text__title">{title}</h2>
        <p className="video__text__channel">{channel}</p>
      </div>
    </div>
  )
}

export default NextVideo