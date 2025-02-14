import { Link } from "react-router-dom"
import NextVideo from '../NextVideo/NextVideo'
import './NextVideoList.scss'

/* Generates Next Video List */
function NextVideoList({media, click}) {
  return (
    <section className="next-video">
      <h1 className="next-video__title">NEXT VIDEO</h1>
      <article> {/* generates props for next videos using data from API */}
        {
          media.map((video) => (
            <Link to={`/videos/${video.id}`} id="video-link" key={video.id} reloadDocument>
              <NextVideo
              key={video.id}
              id = {video.id}
              image={video.image}
              title={video.title}
              channel={video.channel}
              clicked={click}
              />
            </Link>

          ))
        }
      </article>
    </section>
  )
}

export default NextVideoList