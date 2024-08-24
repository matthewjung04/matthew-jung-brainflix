import data from '../../data/video-details.json'
import CommentsDefault from '../CommentsDefault/CommentsDefault';
import CommentsForm from '../CommentsForm/CommentsForm';
import './Comments.scss'

/* Extract comments for main video */
const defaultComments = data[0].comments;

/* Number of comments posted */
const commentCounter = defaultComments.length;

/* Function for converting timestamp into mm/dd/yyyy format */
const convertTime = (time) => {
  const newDate = new Date(time);
  return newDate.toLocaleDateString();
}

function Comments() {
  return (
    <section className="comments">
      <h2 className="comments__title">
        {commentCounter + " Comments"}
      </h2>
      <CommentsForm />
      <article>
        {
          defaultComments.map((post) => (
            <CommentsDefault
            key={post.id}
            id={post.id}
            name={post.name}
            comment={post.comment}
            timestamp={convertTime(post.timestamp)}
            />
          ))
        }
      </article>
    </section>
  )
}

export default Comments