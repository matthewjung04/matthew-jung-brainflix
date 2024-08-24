import './CommentsDefault.scss'

function CommentsDefault({id, name, comment, timestamp}) {
  return (
    <div className="default-comment" id={id}>
      <img className="default-comment__avatar"/>
      <div className="default-comment__box">
        <h1 className="default-comment__box__title">
          <p className="default-comment__box__title__name">{name}</p>
          <p className="default-comment__box__title__time">{timestamp}</p>
        </h1>
        <p className="default-comment__box__post">{comment}</p>
      </div>
    </div>
  )
}

export default CommentsDefault