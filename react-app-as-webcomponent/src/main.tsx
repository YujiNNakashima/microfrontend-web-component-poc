import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

class MyReactAppAsWebComponent extends HTMLElement {

  connectedCallback() {
    ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    )
  }
}

const tagName = "my-react-app-as-web-component";

if (!window.customElements.get(tagName)) {

  window.customElements.define(tagName, MyReactAppAsWebComponent);
}