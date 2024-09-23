import moment from 'moment'
import axios from 'axios'

/* Mock API URL*/
export const url = 'https://unit-3-project-api-0a5620414506.herokuapp.com/';

/* Mock API Key */
const authKey = "9e6ac086-98be-4a83-bc87-b7d7bd18776a";
export const apiKey = '/?api_key=' + authKey;
export const videoApiKey = '?api_key=' +authKey;

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