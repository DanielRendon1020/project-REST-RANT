const React = require("react");
const Def = require("./default");

function home() {
  return (
    <Def>
      <main>
        <div id="home" className="d-flex justify-content-center">
          <h1
            id="home-text"
            className="z-3 position-absolute d-inline-flex p-2 align-self-top"
          >
            RestRANT
          </h1>
          <img
            src="/images/table.jpg"
            alt="Restaurant Review"
            id="home-image"
          />
          <div id="photo-credit" className="d-inline-flex p-2 align-self-end">
            Photo by
            <a
              className="text-decoration-none"
              href="https://unsplash.com/@luisabrimble?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            >
              Luisa Brimble
            </a>
            on
            <a
              className="text-decoration-none"
              href="https://unsplash.com/photos/aFzg83dvnAI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            >
              Unsplash
            </a>
          </div>
          {/* <div id="places-button">
            <a href="/places">
              <button
                className="btn btn-light btn-lg shadow position-absolute top-50 start-50 translate-middle-x p-5"
                type="button"
              >
                Places Page
              </button>
            </a>
          </div> */}
        </div>
      </main>
    </Def>
  );
}

module.exports = home;
