const React = require("react");
const Def = require("../default");

function renderStars(stars) {
  const filledStars = stars;
  const emptyStars = 5 - filledStars;

  const filledStar = <i className="bi bi-star-fill fs-4 text-light p-1"></i>;
  const emptyStar = <i className="bi bi-star fs-4 text-light p-1"></i>;

  const starArray = [];

  for (let i = 0; i < filledStars; i++) {
    starArray.push(filledStar);
  }

  for (let i = 0; i < emptyStars; i++) {
    starArray.push(emptyStar);
  }

  return starArray;
}

function show(data) {
  let totalStars = 0;
  let comments = <p className="text-light">No comments yet.</p>;
  if (data.place.comments.length) {
    comments = data.place.comments.map((c) => {
      totalStars += c.stars;
      return (
        <div className="text-light mt-3 p-3">
          <div className="d-flex justify-content-between align-items-center">
            <h4 className="display-6">
            {c.author}'s {c.rant ? "Rant! 🤬" : "Rave! 😻"}
          </h4>
          <h4 className="">{renderStars(c.stars)}</h4>
          </div>

          <hr />
          <p>{c.content}</p>
        </div>
      );
    });
  }
  const averageRating = data.place.comments.length
    ? Math.round(totalStars / data.place.comments.length)
    : 0;
  return (
    <Def title={data.title}>
      <main id="show">
        <h1 className="text-light ms-5 display-1">{data.place.name}</h1>
        <div
          id="show-img"
          className="d-flex flex-column m-3 position-relative top-0 start-50 translate-middle-x"
        >
          {/* Star Rating */}
          <div className="d-flex flex-wrap justify-content-between">
            <div>
              <h4>{renderStars(averageRating)}</h4>
            </div>
            {/* Edit and delete buttons */}
            <div className="d-inline-flex">
              <a className="m-2" href={`/places/${data.place.id}/edit`}>
                <i
                  id="edit-button"
                  className="bi bi-pencil-square fs-4 text-light"
                ></i>
              </a>
              <form
                method="POST"
                action={`/places/${data.place.id}?_method=DELETE`}
              >
                <button type="submit" className="btn p-0 m-2">
                  <i
                    id="delete-button"
                    className="bi bi-trash3-fill fs-4 text-light"
                  ></i>
                </button>
              </form>
            </div>
          </div>
          <img
            className="rounded-5 mt-2"
            src={data.place.pic}
            alt={data.place.name}
          />
          <p className="text-light fs-3 my-3">
            {data.place.showEstablished()}
            {/* Located in {place.city}, {place.state},{" "}
            <span className="fw-bold">{place.name}</span> is serving up{" "}
            {place.cuisines}. */}
          </p>
          <h4 className="text-light display-4 mt-5">Comments:</h4>
          {/* <form
          method="POST"
          action="/places"
          className=""
        ></form>
          <div className="form-floating">
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              id="comments"
              style={{height: '100px'}}
            ></textarea>
            <label htmlFor="comments">Comment</label>
            {comments}
          </div> */}
          <form method="POST" action={`/places/${data.place.id}/comment`} className=" text-light">
            <div className="mb-3">
              <label htmlFor="author" className="form-label">
                Reviewer:
              </label>
              <input
                type="text"
                className="form-control"
                id="reviewer"
                name="author"
                placeholder="Your Name"
              ></input>
            </div>
            <div className="mb-3">
              <label htmlFor="stars" className="form-label">
                Rating:
              </label>
              <input
                type="range"
                className="form-range"
                min="0"
                max="5"
                id="rating"
                name="stars"
                required
              ></input>
            </div>
            <div className="mb-3 d-flex justify-content-evenly">
              <span className="px-2">
                <input
                type="radio"
                  className="btn-check"
                  id="rant"
                  name="rant"
                  autoComplete="off"
                  value='on'
                ></input>
                <label className="btn btn-lg btn-outline-danger" htmlFor="rant">
                  Rant
                </label>
              </span>
              <span className="px-2">
                <input
                  type="radio"
                  className="btn-check"
                  id="rave"
                  name="rant"
                  autoComplete="off"
                  value='off'
                  defaultChecked
                ></input>
                <label className="btn btn-lg btn-outline-primary" htmlFor="rave">
                  Rave
                </label>
              </span>
            </div>
            <div className="mb-3">
              <label htmlFor="content" className="form-label">
                Comment:
              </label>
              <textarea
                className="form-control"
                id="comment"
                name="content"
                rows="3"
                placeholder="Your Thoughts"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
          {comments}
        </div>
      </main>
    </Def>
  );
}

module.exports = show;
