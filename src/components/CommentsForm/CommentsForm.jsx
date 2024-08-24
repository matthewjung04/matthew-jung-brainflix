import avatarPhoto from '../../assets/images/Mohan-muruge.jpg'
import './CommentsForm.scss'

function CommentsForm() {
  return(
    <article className="comment">
      <img className="comment__avatar" src={avatarPhoto} alt="avatar-photo"/>
      <form className="comment__form">
        <h1 className="comment__form__title">JOIN THE CONVERSATION</h1>
        <div className="comment__form__fields">
          <textarea className="comment__form__fields__text" name="message"
          placeholder="Add a new comment" required></textarea>
          <button type="button" className="comment__form__fields__button">COMMENT</button>
        </div>
      </form>
    </article>
  )
}

export default CommentsForm