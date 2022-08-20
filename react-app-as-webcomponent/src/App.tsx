import { useEffect } from "react";
import * as ReactDom from "react-dom";
function App({ current }: any) {
  let e: any
  useEffect(() => {
    e = new CustomEvent("interactionEvent", {
      bubbles: true,
      cancelable: false,
      composed: true,
      detail: {
        data: 'dados do meu web component!!!'
      }
    });
  }, [])

  return (
  <button onClick={() => {
    current.dispatchEvent(e)
  }}>
    STAND ALONE APP!!!
  </button>
  )
}

export default App

class StandaloneComponent extends HTMLElement {
  mountPoint!: HTMLSpanElement;
  name!: string;

  connectedCallback() {
    const mountPoint = document.createElement("span");
    this.attachShadow({ mode: "open" }).appendChild(mountPoint);
      ReactDom.render(<App current={this} />, mountPoint);
  }
}

window.customElements.get("standalone-component") ||
window.customElements.define("standalone-component", StandaloneComponent);