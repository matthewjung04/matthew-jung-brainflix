import './CommentsDefault.scss'

/* Lists the default comments and updates when new comment is posted */
function CommentsDefault({id, name, comment, timestamp, del}) {
  return (
    <div className="default-comment" id={id}>
      <img className="default-comment__avatar"/>
      <div className="default-comment__box">
        <h1 className="default-comment__box__title">
          <p className="default-comment__box__title__name">{name}</p>
          <p className="default-comment__box__title__time">{timestamp}</p>
        </h1>
        <p className="default-comment__box__post">{comment}</p>
        <button
          className="default-comment__box__delete"
          id={id} onClick={del}>  
        </button>
      </div>
    </div>
  )
}

export default CommentsDefault