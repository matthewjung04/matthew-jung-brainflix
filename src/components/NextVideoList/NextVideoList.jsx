import NextVideo from '../NextVideo/NextVideo'
import './NextVideoList.scss'

function NextVideoList({media, click}) {
  return (
    <section className="next-video">
      <h1 className="next-video__title">NEXT VIDEO</h1>
      <article>
        {
          media.map((video) => (
            <NextVideo
              key={video.id}
              id = {video.id}
              image={video.image}
              title={video.title}
              channel={video.channel}
              // clicked={click}
            />
          ))
        }
      </article>
    </section>
  )
}

export default NextVideoList