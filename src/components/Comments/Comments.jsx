import CommentsDefault from '../CommentsDefault/CommentsDefault';
import CommentsForm from '../CommentsForm/CommentsForm';
import './Comments.scss'

function Comments({media, deleted, posted}) {
  /* Number of comments posted */
  const counter = media.length;

  /* Function for converting timestamp into mm/dd/yyyy format */
  const convertTime = (time) => {
    const newDate = new Date(time);
    return newDate.toLocaleDateString();
  }

  return (
    <section className="comments">
      <h2 className="comments__title">
        {counter + " Comments"}
      </h2>
      <CommentsForm
        submitted={posted} 
      />
      <article> 
        {/* Generate list of comments based on comment data from API */}
        {/* Initially only default comments but list is updated when new comment is posted */}
        { 
          media.map((post) => ( 
            <CommentsDefault 
            key={post.id}
            id={post.id}
            name={post.name}
            comment={post.comment}
            timestamp={convertTime(post.timestamp)}
            del={deleted}
            />
          ))
        }
      </article>
    </section>
  )
}

export default Comments