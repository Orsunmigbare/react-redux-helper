import React from "react"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import "antd/dist/antd.css"
import * as Sentry from "@sentry/browser"
import ReactGA from "react-ga"
import { hydrate, render } from "react-dom"
import { Provider } from "react-redux"
import store from "./store"

if (window.location.hostname !== "localhost") {
  Sentry.init({
    dsn: "https://6227a0d5fd324d37a0db7ca8a61593fe@sentry.io/1833499"
  })
  ReactGA.initialize("UA-138786269-1")
}

const rootElement = document.getElementById("root")
if (rootElement.hasChildNodes()) {
  hydrate(
    <Provider store={store}>
      <Provider store={store}>
        <Provider store={store}>
          <Provider store={store}>
            <Provider store={store}>
              <Provider store={store}>
                <App />
              </Provider>
            </Provider>
          </Provider>
        </Provider>
      </Provider>
    </Provider>,
    rootElement
  )
} else {
  render(<App />, rootElement)
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
