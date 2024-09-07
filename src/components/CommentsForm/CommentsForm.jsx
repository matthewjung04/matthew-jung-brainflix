import avatarPhoto from '../../assets/images/Mohan-muruge.jpg'
import './CommentsForm.scss'

function CommentsForm({submitted}) {
  /* Resets the error border when empty field is filled */
  const inputHandler = (e) => {
    const errorClass = e.target.className;
    if(errorClass.includes('empty-comment')) {
      e.target.classList.remove('empty-comment')
    }
  }

  return(
    <article className="comment">
      <img className="comment__avatar" src={avatarPhoto} alt="avatar-photo"/>
      <form className="comment__form" onSubmit={submitted}>
        <label
          className="comment__form__label"
          htmlFor="message"
          >JOIN THE CONVERSATION
        </label>
        <div className="comment__form__fields">
          <textarea
            className="comment__form__fields__text" name="message"
            placeholder="Add a new comment" onKeyDown={inputHandler}>

          </textarea>
          <button type="submit" className="comment__form__fields__button">COMMENT</button>
        </div>
      </form>
    </article>
  )
}

export default CommentsForm