const React = require("react");
const Def = require("../default");

function show(data) {
  return (
    <Def>
      <main id="show">
        <h1 className="text-light ms-5 display-1">{data.place.name}</h1>
        <div
          id="show-img"
          className="d-flex flex-column m-3 position-relative top-0 start-50 translate-middle-x"
        >
          <div>
            <i className="bi bi-star fs-4 text-light p-1"></i>
            <i className="bi bi-star fs-4 text-light p-1"></i>
            <i className="bi bi-star fs-4 text-light p-1"></i>
            <i className="bi bi-star fs-4 text-light p-1"></i>
            <i className="bi bi-star fs-4 text-light p-1"></i>
          </div>
          <img
            className="rounded-5 mt-2"
            src={data.place.pic}
            alt={data.place.name}
          />
          <p className="text-light fs-3 my-3">
            Located in {data.place.city}, {data.place.state},{" "}
            <span className="fw-bold">{data.place.name}</span> is serving up{" "}
            {data.place.cuisines}.
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
