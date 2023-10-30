import styled from "styled-components";

const Overlay = styled.div`
  display: ${(props) => (props.show ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  background-color: ${(props) => props.theme.colors.sidemenuoverlay};
  z-index: ${(props) => props.zIndex};
`;

export default Overlay;
