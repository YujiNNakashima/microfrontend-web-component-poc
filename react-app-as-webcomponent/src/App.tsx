import { useEffect } from "react";
import * as ReactDom from "react-dom";
function App(props) {
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
  
  console.log()
  return (
    <>
      <button onClick={() => {
        props.current.dispatchEvent(e)
      }}>
        STAND ALONE APP!!!
      </button>

      <p>    data from parent: {JSON.parse(props.current.getAttribute('dataFromParent')).data}</p>
    </>
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