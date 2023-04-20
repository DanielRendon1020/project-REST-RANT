const React = require("react");

function Def(html) {
  return (
    <html>
      <head>
        <title>Title</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
        />
        <link rel="stylesheet" href="/css/style.css" />
      </head>
      <body>{html.children}</body>
    </html>
  );
}

module.exports = Def;
