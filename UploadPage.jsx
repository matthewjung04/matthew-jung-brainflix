import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useEffect, useState } from "react";
import { baseURL } from '../../utils/utils';
import axios from 'axios';
import videoThumbnail from '../../assets/images/Upload-video-preview.jpg'
import './UploadPage.scss'

function UploadPage() {
  let [title, setTitle] = useState("")
  let [description, setDescription] = useState("")
  let [thumbnail, setThumbnail] = useState(videoThumbnail)
  let [hasSubmit, setHasSubmit] = useState(false)
  let [hasUploaded, setHasUploaded] = useState(false)
  const navigate = useNavigate();
 
  /* URL of backend API */
  const baseURL = import.meta.env.VITE_API_URL;
 
  /* SubmitHandler adds submit functionality to publish button */
  const formHanlder = (e) => {
    // e.preventDefault()
    const videoTitle = e.target.title.value;
    const videoDescription = e.target.description.value;

    /* Successfully submits form if all fields are filled in */
    if(videoTitle && videoDescription) {
      alert(`${videoTitle} has been successfully submitted!`)
      setTitle(title=videoTitle)
      setDescription(description=videoDescription)
      setHasSubmit(hasSubmit = true)
    }

    /* Returns error if any field is left blank */
    else if (!videoTitle || !videoDescription) {
      const titleInput = e.target.querySelector('input');
      const descriptionInput = e.target.querySelector('textarea');
      
      if(!videoTitle) { titleInput.classList.add('error') };
      if(!videoDescription) { descriptionInput.classList.add('error') };

      alert('All fields must be filled in')
    }
  }

  /* Reads image filepath and writes as image file source  */
  const reader = new FileReader();

  /* Changes images source and preview based on uploaded image file */
  const loadHandler = (e) => {
    if (e.type === "load") {
      setThumbnail(thumbnail=reader.result);
    }
  }

  const fileHandler = (e) => {
    reader.addEventListener("load", loadHandler);

    if(e.target.files[0]){
      reader.readAsDataURL(e.target.files[0])
    }
  }

  /* Resets the error border when empty field is filled */
  const inputHandler = (e) => {
    const errorClass = e.target.className;
    if(errorClass.includes('error')) {
      e.target.classList.remove('error')
    }
  }

  useEffect(()=> {
    const postVideo = async () => {
      if(hasSubmit) {
        await axios.post(
          (`${baseURL}/videos`),
          {title: title, image: thumbnail, description: description}
        ).then(
          navigate('/')
        )
      }
    }
    postVideo();
  },[hasSubmit])

  /* Redirects to hompage if upload form has been successfully submitted */
  
  return (
  <>
    <h1 className="uploads-page__header">Upload Video</h1>
    <form className="uploads-page__form" onSubmit={formHanlder}>
      <article className="uploads-page__form__fields">
        
        {/* Upload video thumnail photo */}
        <div className="uploads-page__form__fields__thumbnail">
          <div className="uploads-page__form__fields__thumbnail__upload">
            <label 
              className="uploads-page__form__fields__thumbnail__upload__label"
              htmlFor="imageFile"
              >VIDEO THUMBNAIL
            </label>
            <input
              className="uploads-page__form__fields__thumbnail__upload__file"
              type="file" name="imageFile"
              onChange={fileHandler} accept="image/*"
            />
          </div>
          <img
            src={thumbnail} 
            className="uploads-page__form__fields__thumbnail__image"
            alt="upload-image"
          />
        </div>

        {/* Form input fields */}
        <div className="uploads-page__form__fields__inputs">

          {/* Input video videoTitle */}
          <label 
            className="uploads-page__form__fields__inputs__label"
            htmlFor="title"
            >TITLE YOUR VIDEO
          </label>
          <input
            type="text" name="title"
            onKeyDown={inputHandler}
            className="uploads-page__form__fields__inputs__text" 
            placeholder="Add a videoTitle to your video"
          />

          {/* Input video video Description */}
          <label
            className="uploads-page__form__fields__inputs__label"
            htmlFor="description"
            >ADD A VIDEO DESCRIPTION
          </label>
          <textarea
            name="description"
            onKeyDown={inputHandler}
            className="uploads-page__form__fields__inputs__textbox"
            placeholder="Add a videoDescription to your video">
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