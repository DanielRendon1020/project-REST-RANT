const React = require("react");
const Def = require("../default");

function index(data) {
  let placesFormatted = data.places.map((place) => {
    return (
      <div className="d-flex flex-sm-column p-5">
        <h2 className="text-center p-2 text-light">{place.name}</h2>
        <p className="text-center p-2 text-light">{place.cuisines}</p>
        <div id="img-container">
          <img id="img-background" src={place.pic} alt={place.name} />
          <img id="img-resize" src={place.pic} alt={place.name} />
        </div>
        <p className="text-center p-2 text-light">
          Located in {place.city}, {place.state}
        </p>
      </div>
    );
  });
  return (
    <Def>
      <main id="places">
        <h1 className="text-light ms-5">Places to Rant or Rave About</h1>
        <div className="d-flex justify-content-center">{placesFormatted}</div>
      </main>
    </Def>
  );
}

module.exports = index;
