import data from "../../data/video-details.json"
import NextVideo from "../NextVideo/NextVideo"
import './NextVideoList.scss'

function NextVideoList() {
  return (
    <section>
      {
        data.map((video) => (
          <NextVideo
            key={video.id}
            image={video.image}
            title={video.title}
            channel={video.channel}
          />
        ))
      }
    </section>
  )
}

export default NextVideoList