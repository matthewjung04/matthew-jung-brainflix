import { Link } from 'react-router-dom'
import videoThumbnail from '../../assets/images/Upload-video-preview.jpg'
import './UploadPage.scss'

function UploadPage() {
  return (
  <>
    <h1 className="uploads-page__header">Upload Video</h1>
    <form className="uploads-page__form">
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
            className="uploads-page__form__fields__inputs__textbox"
            placeholder="Add a description to your video">
          </textarea>
        </div>
      </article>

      {/* Submit button and 'cancel' link */}
      <article className="uploads-page__form__buttons">
        <button type="submit" className="uploads-page__form__buttons__publish">
          PUBLISH
        </button>
        <Link to="/" className="uploads-page__form__buttons__cancel" reloadDocument>
          CANCEL
        </Link>
      </article>
    </form>
  </>
  )
}

export default UploadPage