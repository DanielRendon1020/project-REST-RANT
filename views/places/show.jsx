const React = require("react");
const Def = require("../default");

function show({ place, title }) {
  return (
    <Def title={title}>
      <main id="show">
        <h1 className="text-light ms-5 display-1">{place.name}</h1>
        <div
          id="show-img"
          className="d-flex flex-column m-3 position-relative top-0 start-50 translate-middle-x"
        >
          {/* Star Rating */}
          <div className="d-flex flex-wrap justify-content-between">
            <div>
              <i className="bi bi-star fs-4 text-light p-1"></i>
              <i className="bi bi-star fs-4 text-light p-1"></i>
              <i className="bi bi-star fs-4 text-light p-1"></i>
              <i className="bi bi-star fs-4 text-light p-1"></i>
              <i className="bi bi-star fs-4 text-light p-1"></i>
            </div>
            {/* Edit and delete buttons */}
            <div className="d-inline-flex">
              <a className="m-2" href={`/places/${place.id}/edit`}>
                <i id="edit-button" className="bi bi-pencil-square fs-4 text-light"></i>
              </a>
              <form method="POST" action={`/places/${place.id}?_method=DELETE`}>
                <button type="submit" className="btn p-0 m-2">
                  <i id="delete-button" className="bi bi-trash3-fill fs-4 text-light"></i>
                </button>
              </form>
            </div>
          </div>
          <img
            className="rounded-5 mt-2"
            src={place.pic}
            alt={place.name}
          />
          <p className="text-light fs-3 my-3">
            Located in {place.city}, {place.state},{" "}
            <span className="fw-bold">{place.name}</span> is serving up{" "}
            {place.cuisines}.
          </p>
          <h4 className="text-light display-4 mt-5">Comments:</h4>
          <p className="text-light">No comments yet.</p>
          {/* <div className="form-floating">
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              id="comments"
              style={{height: '100px'}}
            ></textarea>
            <label htmlFor="comments">Comments</label>
          </div> */}
        </div>
      </main>
    </Def>
  );
}

module.exports = show;
