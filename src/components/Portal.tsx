import * as React from "react";
import ReactDOM from "react-dom";

const portalRoot = document.getElementById("portal");

class Portal extends React.Component {
  el: HTMLElement = document.createElement("div");

  constructor(props: any) {
    super(props);
    this.el = document.createElement("div");
  }

  componentDidMount = () => {
    portalRoot?.appendChild(this.el);
  };

  componentWillUnmount = () => {
    portalRoot?.removeChild(this.el);
  };

  render() {
    const { children } = this.props;
    return ReactDOM.createPortal(children, this.el);
  }
}

export default Portal;
