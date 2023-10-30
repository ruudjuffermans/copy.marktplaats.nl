import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { LOGIN_CLOSE, LOGIN_OPEN, GDPR_CLOSE, GDPR_OPEN } from "state/uiSlice";
import Text from "components/Text";
import Overlay from "components/Overlay";
import media from "utils/media";
import Cookies from "js-cookie";

const GdprModal = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;

  ${media.sm(css`
    max-width: 700px;
    height: auto;
    border-radius: 4px;
  `)};
`;

const Button = styled.button`
  background-color: #116db4;
  border-color: #116db4;
  color: #fff;
`;

const Header = styled.div`
  border-bottom: 1px solid #e5e5e4;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 0;
`;

const Logo = styled.img.attrs({
  src: "/marktplaats.svg",
})`
  height: 24px;
  display: inline-block;
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position: center;
`;

const Content = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  padding: 0 16px 32px 16px;
  overflow-y: auto;
`;

const ContentHeader = styled.div`
  margin: 24px 0 16px 0;
`;

const ContentBodyDesktop = styled.span`
  display: ${(props) => {
    return props.version === "desktop" ? "inline" : "none";
  }};
`;

const ContentBodyMobile = styled.span`
  display: ${(props) => (props.version === "mobile" ? "inline" : "none")};
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #e5e5e4;
  padding: 12px 16px 0 16px;
  margin-top: auto;
  gap: 12px;
  margin-bottom: 12px;

  ${media.sm(css`
    justify-content: end;
    flex-direction: row-reverse;
  `)};
`;

const CookieModal = () => {
  const ui = useSelector((state) => state.ui);
  const [modalVersion, setModalVersion] = useState("desktop");

  const dispatch = useDispatch();

  useEffect(() => {
    if (ui.gdprModal) {
      document.body.classList.add("body-lock");
    } else {
      document.body.classList.remove("body-lock");
    }
  }, [ui.gdprModal]);

  useEffect(() => {
    const GDPR = Cookies.get("GDPR");
    if (GDPR === undefined) {
      dispatch(GDPR_OPEN());
    }
  }, []);

  const handleGDPR = () => {
    Cookies.set("GDPR");
    dispatch(GDPR_CLOSE());
  };

  return (
    <Overlay show={ui.gdprModal} zIndex={99}>
      <GdprModal>
        <Header>
          <Logo />
        </Header>
        <Content>
          <ContentHeader>
            <Text
              fontFamily={2}
              fontWeight="400"
              fontSize="32px"
              lineHeight="40px"
            >
              Mogen we cookies gebruiken?
            </Text>
          </ContentHeader>
          <Text fontSize={"16px"} lineHeight={"22px"} fontFamily={0}>
            <ContentBodyMobile version={modalVersion}>123</ContentBodyMobile>
            <ContentBodyDesktop version={modalVersion}>
              Om Marktplaats beter voor jou te laten werken en persoonlijker te
              maken, gebruiken wij en onze{" "}
              <a href="https://www.adevinta.com/" target="_blank">
                partners
              </a>{" "}
              cookies en vergelijkbare technieken en gepseudonimiseerde
              gebruikersdata. Hiermee analyseren we de prestaties van ons
              platform, verbeteren we de ervaring en kunnen wij en onze partners
              de website, onze communicatie en advertenties aanpassen op jouw
              interesses.
              <br />
              <br />
              Door op "Accepteren" te klikken ga je hiermee akkoord. Je kunt
              cookies ook weigeren door hieronder op Instellingen te klikken of
              je toestemming later intrekken via{" "}
              <a href="/consent?expandPartners=true">marktplaats.nl/consent</a>
              . Je kunt je instellingen ook aanpassen via onderstaande knop.
              <br />
              <br />
              Meer weten? Lees ons{" "}
              <a
                href="https://www.marktplaats.nl/i/help/over-marktplaats/voorwaarden-en-privacybeleid/cookiebeleid.html"
                target="_blank"
              >
                cookiebeleid{" "}
              </a>
              en onze{" "}
              <a
                href="https://www.marktplaats.nl/i/help/over-marktplaats/voorwaarden-en-privacybeleid/privacyverklaring/"
                target="_blank"
              >
                Privacyverklaring
              </a>
              .
            </ContentBodyDesktop>
          </Text>
        </Content>
        <Footer>
          <Button onClick={() => handleGDPR()}>
            <Text fontFamily={"2"}>Accepteren</Text>
          </Button>
          {/* <ButtonComponent outlined color="blue">
            <Text fontFamily={"2"}>Instellingen</Text>
          </ButtonComponent> */}
        </Footer>
      </GdprModal>
    </Overlay>
  );
};

export default CookieModal;
