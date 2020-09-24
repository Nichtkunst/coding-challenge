/** @jsx jsx */
import * as React from "react";
import styled from "@emotion/styled";
import { jsx } from "theme-ui";
// @ts-ignore
import { Button } from "rebass";

import Portal from "./Portal";

// https://css-tricks.com/using-react-portals-to-render-children-outside-the-dom-hierarchy/

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  position: relative;
  background: white;
  border-radius: 5px;
  padding: 16px;
  min-width: 320px;
  z-index: 10;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
  margin-bottom: 100px;
`;

type ModalProps = {
  // using `interface` is also ok
  setToggle: (b: boolean) => void;
  toggle: boolean;
  children: React.ReactNode;
};

class Modal extends React.Component<ModalProps> {
  render() {
    const { children, toggle, setToggle } = this.props;
    return (
      <Portal>
        {toggle ? (
          <Wrapper>
            <Card>
              <Button
                onClick={() => setToggle(!toggle)}
                variant="outline"
                css={{ position: "absolute", top: "0", right: "0" }}
              >
                X
              </Button>
              <div>{children}</div>
            </Card>
          </Wrapper>
        ) : null}
      </Portal>
    );
  }
}

export default Modal;
