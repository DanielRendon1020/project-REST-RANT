const React = require("react");

function Def(html) {
  return (
    <html>
      <head>
        <title>{html.title || "Default"}</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.4/font/bootstrap-icons.css"
        ></link>
        <link rel="stylesheet" href="/css/style.css" />
      </head>
      <body>
        <nav>
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <a className="nav-link text-light fs-2 mx-2" href="/">
                RestRANT
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light fs-2 mx-2" href="/places">
                Places
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light fs-2 mx-2" href="/places/new">
                Add Place
              </a>
            </li>
          </ul>
        </nav>
        {html.children}
      </body>
      <footer></footer>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe"
        crossOrigin="anonymous"
      ></script>
    </html>
  );
}

module.exports = Def;
