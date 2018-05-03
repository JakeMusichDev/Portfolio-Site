// import React from 'react'
// import ReactDOM from 'react-dom'
import App from './app/App'
//
// const root = document.getElementById('root')
//
// ReactDOM.render(<App />, root)
import React from 'react'
import { render } from 'react-dom'
// import App from './App'

function renderApp() {
  render(<App />, root)
}

renderApp()

module.hot.accept(renderApp)
