import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"

import "@fontsource/prompt/100-italic.css"
import "@fontsource/prompt/200-italic.css"
import "@fontsource/prompt/300-italic.css"
import "@fontsource/prompt/400-italic.css"
import "@fontsource/prompt/500-italic.css"
import "@fontsource/prompt/600-italic.css"
import "@fontsource/prompt/700-italic.css"
import "@fontsource/prompt/800-italic.css"
import "@fontsource/prompt/900-italic.css"

import "@fontsource/prompt/100.css"
import "@fontsource/prompt/200.css"
import "@fontsource/prompt/300.css"
import "@fontsource/prompt/400.css"
import "@fontsource/prompt/500.css"
import "@fontsource/prompt/600.css"
import "@fontsource/prompt/700.css"
import "@fontsource/prompt/800.css"
import "@fontsource/prompt/900.css"

import "./index.css"

import ScrollObserver from "./Scroll-observer"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ScrollObserver>
      <App />
    </ScrollObserver>
  </React.StrictMode>,
)
