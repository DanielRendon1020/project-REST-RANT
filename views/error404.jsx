const React = require('react')
const Def = require('./default')

function error404() {
    return (
        <Def>
            <main>
                <h1>404 Page</h1>
                <img src="https://media.giphy.com/media/0avOIv3VoMz3WcDGXW/giphy.gif" alt="Come on, guys! Get out of here!" />
            </main>
        </Def>
    )
}

module.exports = error404