import './NotFoundPage.scss'

/* Generic page in case non-matching path is accessed */
function NotFoundPage() {
  return (
    <>
      <h1 id="not-found-heading">404</h1>
      <p id="not-found-subeading">Can't find what you're looking for, sorry!</p>
    </>
  );
}

export default NotFoundPage;