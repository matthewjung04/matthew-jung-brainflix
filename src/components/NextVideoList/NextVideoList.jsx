import data from '../../data/video-details.json'
import NextVideo from '../NextVideo/NextVideo'
import './NextVideoList.scss'

/* Modify json data to filter first video for default state */
const videoData = data.slice(1);

function NextVideoList() {
  return (
    <section className="next-video">
      <h1 className="next-video__title">NEXT VIDEO</h1>
      <article>
        {
          videoData.map((video) => (
            <NextVideo
              key={video.id}
              id = {video.id}
              image={video.image}
              title={video.title}
              channel={video.channel}
            />
          ))
        }
      </article>
    </section>
  )
}

export default NextVideoList