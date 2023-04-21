const React = require("react");
const Def = require("./default");

function error404() {
  return (
    <Def>
      <main className="d-flex flex-column justify-content-center align-items-center">
        <h1 className="my-5 display-1">Oops! There's nothing here.</h1>

        <a href="/places">
          <button className="my-3 btn btn-outline-light btn-lg">
            Take me back
          </button>
        </a>

        <div>
          <img
            id="img-404"
            className="my-3 rounded-4 shadow-lg"
            src="https://media.giphy.com/media/0avOIv3VoMz3WcDGXW/giphy.gif"
            alt="Come on, guys! Get out of here!"
          />
        </div>
      </main>
    </Def>
  );
}

module.exports = error404;
