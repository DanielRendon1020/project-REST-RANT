const React = require("react");
const Def = require("./default");

function home() {
  return (
    <Def title="RestRant">
      <main>
        <div id="home" className="d-flex flex-column">
          <div id="home-intro" className="position-absolute mt-5 text-light">
            <h1 id="home-text" className="display-1">
              RestRANT
            </h1>
            <div className="py-5">
              <figure className="text-center">
                <blockquote className="blockquote fst-italic">
                  <p>
                    "Your one-stop-site for the best and worst restaurants
                    anywhere."
                  </p>
                </blockquote>
                <figcaption className="blockquote-footer text-light">
                  Someone very important and credible
                </figcaption>
              </figure>
            </div>
            <div className="px-5">
              <h3>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum,
                aperiam sed. Facilis totam eveniet, expedita vitae deserunt
                cumque voluptatum odit id est laudantium eum ad perferendis
                impedit, nobis, nisi sequi.
              </h3>
            </div>
          </div>
          <div className="position-relative d-flex flex-column">
            <div
              id="photo-credit"
              className="p-1 position-absolute bottom-0 start-50 translate-middle-x"
            >
              Photo by{" "}
              <a
                className="text-decoration-none"
                href="https://unsplash.com/@luisabrimble?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
              >
                Luisa Brimble
              </a>{" "}
              on{" "}
              <a
                className="text-decoration-none"
                href="https://unsplash.com/photos/aFzg83dvnAI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
              >
                Unsplash
              </a>
            </div>
            <img
              src="/images/table.jpg"
              alt="Restaurant Review"
              id="home-image"
              className="z-n1"
            />
          </div>
        </div>
      </main>
    </Def>
  );
}

module.exports = home;
