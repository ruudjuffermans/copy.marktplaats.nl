import styled from "styled-components";
import { useMediaSM } from "utils/useMedia";
import HeaderLogo from "./HeaderLogo";
import { Link } from "react-router-dom";
import { LinkButton } from "components/Button";

const HeaderL = styled.div`
  flex: auto;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const HeaderLink = ({ title, link }) => {
  const small = useMediaSM();
  return (
    small && (
      <LinkButton to={link} title={title}>
        {title}
      </LinkButton>
    )
  );
};

const LeftSide = () => {
  return (
    <HeaderL>
      <Link to="/">
        <HeaderLogo />
      </Link>
      <HeaderLink title={"Help en info"} link={"/"} />
      <HeaderLink title={"Voorwaarden"} link={"/"} />
      <HeaderLink title={"Information"} link={"/information"} />
    </HeaderL>
  );
};

export default LeftSide;
