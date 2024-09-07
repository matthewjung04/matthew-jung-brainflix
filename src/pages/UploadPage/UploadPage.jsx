import { Link } from 'react-router-dom'
import videoThumbnail from '../../assets/images/Upload-video-preview.jpg'
import './UploadPage.scss'

function UploadPage() {

  /* SubmitHandler adds submit functionality to publihs button */
  
  const formHanlder = (e) => {
    e.preventDefault()
    const title = e.target.title.value;
    const description = e.target.description.value;

    /* Successfully submits form if all fields are filled in*/
    if(title && description) {
      alert(`${title} has been successfully submitted!`)
    }

    /* Returns error if any field is left blank */
    else if (!title || !description) {
      const titleInput = e.target.querySelector('input');
      const descriptionInput = e.target.querySelector('textarea');
      
      if(!title) { titleInput.classList.add('error') }
      if(!description) { descriptionInput.classList.add('error') }

      alert('All fields must be filled in')
    }
  }

  /* Resets the error border when empty field is filled */
  const inputHandler = (e) => {
    const errorClass = e.target.className;
    if(errorClass.includes('error')) {
      e.target.classList.remove('error')
    }
  }

  /* Currently uploads page has partial functionality for submit and cancel button links */
  return (
  <>
    <h1 className="uploads-page__header">Upload Video</h1>
    <form className="uploads-page__form" onSubmit={formHanlder}>
      <article className="uploads-page__form__fields">
        
        {/* Upload video thumnail photo */}
        <div className="uploads-page__form__fields__thumbnail">
          <label className="uploads-page__form__fields__thumbnail__label">
            VIDEO THUMBNAIL
          </label>
          <img
            src={videoThumbnail} 
            className="uploads-page__form__fields__thumbnail__image"
            alt="upload-image"
          />
        </div>

        {/* Form input fields */}
        <div className="uploads-page__form__fields__inputs">

          {/* Input video title */}
          <label 
            className="uploads-page__form__fields__inputs__label"
            htmlFor="title"
            >TITLE YOUR VIDEO
          </label>
          <input
            type="text" name="title"
            onKeyDown={inputHandler}
            className="uploads-page__form__fields__inputs__text" 
            placeholder="Add a title to your video"
          />

          {/* Input video description */}
          <label
            className="uploads-page__form__fields__inputs__label"
            htmlFor="description"
            >ADD A VIDEO DESCRIPTION
          </label>
          <textarea
            name="description"
            onKeyDown={inputHandler}
            className="uploads-page__form__fields__inputs__textbox"
            placeholder="Add a description to your video">
          </textarea>
        </div>
      </article>

      {/* Submit button and 'cancel' link */}
      <article className="uploads-page__form__buttons">
        {/* Alerts sucess of submission and redirects to hompage */}
        <button type="submit" className="uploads-page__form__buttons__publish">
          PUBLISH
        </button>
        {/* Redirects to hompage */}
        <Link to="/" className="uploads-page__form__buttons__cancel" reloadDocument>
          CANCEL
        </Link>
      </article>
    </form>
  </>
  )
}

export default UploadPage