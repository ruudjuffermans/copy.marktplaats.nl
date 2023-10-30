import Button from "components/Button";
import React from "react";
import styled from "styled-components";

const CardEl = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
  z-index: 99002;
  display: ${(props) => (props.show ? "flex" : "none")};

  flex-direction: column;

  @media (min-width: 767px) {
    /* max-width: 700px; */
    height: auto;
    border-radius: 4px;
  }
`;

const CardHeader = styled.div`
  border-bottom: 1px solid #e5e5e4;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 0;

  > i {
    height: 24px;
    display: inline-block;
    background-size: auto 100%;
    background-repeat: no-repeat;
    background-position: center;

    background-image: url(tenant--nlnl.fdb6d8c5.svg);
    width: 642px;
    height: 96px;
  }
`;

const CardBody = styled.div`
  padding: 0 16px 32px 16px;
  overflow-y: auto;
  color: #2d3c4d;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;

  h2 {
    font-family: Roboto, serif;
    font-size: 32px;
    font-weight: 400;
    line-height: 40px;
    margin: 0;
  }
`;

const CardFooter = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #e5e5e4;
  padding: 12px 16px 0 16px;
  margin-top: auto;
  gap: 12px;
  margin-bottom: 12px;
`;

const Card = ({ ref, show }) => {
  return (
    <CardEl ref={ref} show={show}>
      <CardHeader>Header logo</CardHeader>
      <CardBody>
        <h2 class="gdpr-consent-modal-content-header hz-text-header2">
          Mogen we cookies gebruiken?
        </h2>
        <span class="gdpr-consent-modal-content-body-mobile-text">
          Om Marktplaats beter voor jou te laten werken en persoonlijker te
          maken, gebruiken wij en onze{" "}
          <a
            class="gdpr-consent-page-link hz-Link"
            data-ga-event="AdevintaPageLink"
            href="https://www.adevinta.com/"
            target="_blank"
          >
            partners
          </a>{" "}
          cookies en vergelijkbare technieken en gepseudonimiseerde
          gebruikersdata. Hiermee analyseren we de prestaties van ons platform,
          verbeteren we de ervaring en kunnen wij en onze partners de website,
          onze communicatie en advertenties aanpassen op jouw interesses.
          <br />
          <br />
          Door op "Accepteren" te klikken ga je hiermee akkoord. Je kunt cookies
          ook weigeren door hieronder op Instellingen te klikken of je
          toestemming later intrekken via{" "}
          <a
            class="gdpr-consent-page-link hz-Link"
            data-ga-event="ConsentPageLink"
            href="/consent?expandPartners=true"
          >
            marktplaats.nl/consent
          </a>
          . Je kunt je instellingen ook aanpassen via onderstaande knop.
          <br />
          <br />
          Meer weten? Lees ons{" "}
          <a
            class="gdpr-consent-page-link hz-Link"
            data-ga-event="CookiePolicyLink"
            href="https://www.marktplaats.nl/i/help/over-marktplaats/voorwaarden-en-privacybeleid/cookiebeleid.html"
            target="_blank"
          >
            cookiebeleid
          </a>{" "}
          en onze{" "}
          <a
            class="gdpr-consent-page-link hz-Link"
            data-ga-event="PrivacyStatementLink"
            href="https://www.marktplaats.nl/i/help/over-marktplaats/voorwaarden-en-privacybeleid/privacyverklaring/"
            target="_blank"
          >
            Privacyverklaring
          </a>
          .
        </span>
      </CardBody>
      <CardFooter>
        {/* <Button>Instellingen</Button> */}
        <Button>Accepteren</Button>
      </CardFooter>
    </CardEl>
  );
};

export default Card;
