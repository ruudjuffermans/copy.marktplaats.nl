import Text from "components/Text";
import styled, { css } from "styled-components";
import { useMediaSM } from "utils/useMedia";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const HeaderNav = styled.div`
  margin: auto;
  z-index: 100;
  padding: 0;
  color: #116db4;
  width: 100%;
  display: flex;
`;

const HeaderButton = styled.a`
  display: flex;
  font-size: 12px;
  font-weight: 300;
  padding: 0 5px;
  min-height: 32px;
  line-height: 32px;
  border: 0;
  border-radius: 3px;
  :hover {
    color: #007bc5;
    cursor: pointer;
    background-color: #f7f7f6;
  }
`;

const HeaderLink = ({ title, onClick, link }) => {
  const small = useMediaSM();
  return small ? (
    <HeaderButton onClick={onClick} href={link} title={title}>
      <Text>{title}</Text>
    </HeaderButton>
  ) : (
    <></>
  );
};

const MainBar = ({ toggle, isOpen }) => {
  return (
    <HeaderNav>
      <LeftSide />
      <RightSide toggle={toggle} isOpen={isOpen} />
    </HeaderNav>
  );
};

export default MainBar;
