import moment from 'moment'
import axios from 'axios'

/* Backend API URL */
export const baseURL = import.meta.env.VITE_API_URL;

/* API GET Request */
export const getVideoAPI = async (video, setVideo, setComment) => {
  await axios
    .get(`${baseURL}/videos/${video}`)
    .then((response) => { 
      setVideo(response.data)

      const newComments = response.data.comments;
      newComments.sort((a,b) => {return b.timestamp-a.timestamp});
      setComment(newComments);
    })
};

/* Function for converting timestamp into mm/dd/yyyy format */
export const convertTime = (time) => {
  const newDate = new Date(time);
  return newDate.toLocaleDateString();
}

/* Convert to dynamic time stamp */
export function dynamicDates(postTime) {
  return moment(postTime).fromNow();
}

/* Delay Function */
export function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}