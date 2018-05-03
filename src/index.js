import React from 'react'
import ReactDOM from 'react-dom'
import App from './app/App'

const root = document.getElementById('root')

ReactDOM.render(<App />, root)

//
// function renderApp() {
//   const App = require('./app/App').default
//   render(<App />, root)
// }
//
// renderApp()
//
// module.hot.accept(renderApp)
