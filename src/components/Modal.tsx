import * as React from "react";
import ReactDOM from "react-dom";

// https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/portals/
// https://codesandbox.io/s/3x4pmxwrw1?file=/src/index.js
// https://css-tricks.com/using-react-portals-to-render-children-outside-the-dom-hierarchy/

// modalRoot in the DOM
const modalRoot = document.getElementById("modal-root");

class Modal extends React.Component {
  el: HTMLElement = document.createElement("div");

  // phew TS
  constructor(props: any) {
    super(props);
    this.el = document.createElement("div");
  }

  // seems to be pretty weird ? nullable
  componentDidMount() {
    modalRoot?.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot?.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}

export default Modal;
