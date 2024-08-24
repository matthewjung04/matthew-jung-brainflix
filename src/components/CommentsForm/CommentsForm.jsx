import avatarPhoto from '../../assets/images/Mohan-muruge.jpg'
import './CommentsForm.scss'

function CommentsForm() {
  return(
    <article className="comment">
      <img className="comment__avatar" src={avatarPhoto} alt="avatar-photo"/>
      <form className="comment__form">
        <h1 className="comment__form__title">JOIN THE CONVERSATION</h1>
        <textarea className="comment__form__text" name="message" rows="5"
        placeholder="Add a new comment" required></textarea>
        <button type="button" className="comment__form__button">COMMENT</button>
      </form>
    </article>
  )
}

export default CommentsForm