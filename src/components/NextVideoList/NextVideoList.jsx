import data from '../../data/video-details.json'
import NextVideo from '../NextVideo/NextVideo'
import './NextVideoList.scss'

/* Modify json data to filter first video for default state */
const videoData = data.slice(1);

function NextVideoList() {
  return (
    <section>
      <h1>NEXT VIDEO</h1>
      <article>
        {
          videoData.map((video) => (
            <NextVideo
              key={video.id}
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