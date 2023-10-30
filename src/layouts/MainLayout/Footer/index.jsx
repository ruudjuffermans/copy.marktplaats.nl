import React from "react";
import styled, { css } from "styled-components";
import media from "utils/media";
import Link from "components/Link";

const FooterEl = styled.footer`
  background-color: #fff;
`;

const LinksSection = styled.section`
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  padding: 8px 16px;
  display: grid;
  grid-template-columns: 50% 50%;
  width: 100%;
  justify-items: left;
  text-align: left;
  overflow: hidden;
  border-bottom: 1px solid #e5e5e4;

  ${media.xs(css`
    display: block;
    text-align: center;
  `)};
`;

const CatLinksSection = styled.section`
  background-color: #fff;
  margin-top: 32px;
  width: 100%;
  border-bottom: 1px solid #e5e5e4;
`;

const CatLinkRow = styled.div`
  display: flex;
  margin: 0 auto;
  padding-bottom: 32px;
  padding-left: 24px;
  padding-right: 24px;
  flex-wrap: wrap;
  flex-direction: row;
  max-width: 980px;
`;

const CatLinkBlock = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 50%;
  margin-top: 24px;

  ${media.sm(css`
    flex-basis: 25%;
  `)};
`;

const CatLinkBlockHeader = styled.h3`
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
`;

const CatLinkBlockLink = styled(Link)`
  margin-top: 12px;
`;

const TextSection = styled.section`
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  color: #4b6179;
  padding: 32px 16px;
  text-align: center;
`;

const FooterLink = styled.a`
  color: #116db4;
  cursor: pointer;
  text-decoration: none;
  margin: 8px 0;
  display: inline-block;
  font-size: 14px;

  ${media.xs(css`
    margin: 8px 16px;
    font-size: 16px;
  `)};
`;

const accountRoutes = [
  "/account/login",
  "/account/reset",
  "/account/register",
  "/information",
  "/messages",
  "/notifications",
  "/profile/my-profile",
  "/profile/my-listings",
  "/profile/my-favorites",
];

const Footer = ({ listingsPage }) => {
  return (
    <FooterEl>
      {listingsPage && (
        <CatLinksSection>
          <CatLinkRow>
            <CatLinkBlock>
              <CatLinkBlockHeader>Audio, Tv en Foto</CatLinkBlockHeader>
              <CatLinkBlockLink to="#">Digitale camera's</CatLinkBlockLink>
              <CatLinkBlockLink to="#">Luidsprekers</CatLinkBlockLink>
              <CatLinkBlockLink to="#">Stereo's</CatLinkBlockLink>
              <CatLinkBlockLink to="#">Televisies</CatLinkBlockLink>
            </CatLinkBlock>
            <CatLinkBlock>
              <CatLinkBlockHeader>Audio, Tv en Foto</CatLinkBlockHeader>
              <CatLinkBlockLink to="#">Digitale camera's</CatLinkBlockLink>
              <CatLinkBlockLink to="#">Luidsprekers</CatLinkBlockLink>
              <CatLinkBlockLink to="#">Stereo's</CatLinkBlockLink>
              <CatLinkBlockLink to="#">Televisies</CatLinkBlockLink>
            </CatLinkBlock>
            <CatLinkBlock>
              <CatLinkBlockHeader>Audio, Tv en Foto</CatLinkBlockHeader>
              <CatLinkBlockLink to="#">Digitale camera's</CatLinkBlockLink>
              <CatLinkBlockLink to="#">Luidsprekers</CatLinkBlockLink>
              <CatLinkBlockLink to="#">Stereo's</CatLinkBlockLink>
              <CatLinkBlockLink to="#">Televisies</CatLinkBlockLink>
            </CatLinkBlock>
            <CatLinkBlock>
              <CatLinkBlockHeader>Audio, Tv en Foto</CatLinkBlockHeader>
              <CatLinkBlockLink to="#">Digitale camera's</CatLinkBlockLink>
              <CatLinkBlockLink to="#">Luidsprekers</CatLinkBlockLink>
              <CatLinkBlockLink to="#">Stereo's</CatLinkBlockLink>
              <CatLinkBlockLink to="#">Televisies</CatLinkBlockLink>
            </CatLinkBlock>
            <CatLinkBlock>
              <CatLinkBlockHeader>Audio, Tv en Foto</CatLinkBlockHeader>
              <CatLinkBlockLink to="#">Digitale camera's</CatLinkBlockLink>
              <CatLinkBlockLink to="#">Luidsprekers</CatLinkBlockLink>
              <CatLinkBlockLink to="#">Stereo's</CatLinkBlockLink>
              <CatLinkBlockLink to="#">Televisies</CatLinkBlockLink>
            </CatLinkBlock>
            <CatLinkBlock>
              <CatLinkBlockHeader>Audio, Tv en Foto</CatLinkBlockHeader>
              <CatLinkBlockLink to="#">Digitale camera's</CatLinkBlockLink>
              <CatLinkBlockLink to="#">Luidsprekers</CatLinkBlockLink>
              <CatLinkBlockLink to="#">Stereo's</CatLinkBlockLink>
              <CatLinkBlockLink to="#">Televisies</CatLinkBlockLink>
            </CatLinkBlock>
            <CatLinkBlock>
              <CatLinkBlockHeader>Audio, Tv en Foto</CatLinkBlockHeader>
              <CatLinkBlockLink to="#">Digitale camera's</CatLinkBlockLink>
              <CatLinkBlockLink to="#">Luidsprekers</CatLinkBlockLink>
              <CatLinkBlockLink to="#">Stereo's</CatLinkBlockLink>
              <CatLinkBlockLink to="#">Televisies</CatLinkBlockLink>
            </CatLinkBlock>
            <CatLinkBlock>
              <CatLinkBlockHeader>Audio, Tv en Foto</CatLinkBlockHeader>
              <CatLinkBlockLink to="#">Digitale camera's</CatLinkBlockLink>
              <CatLinkBlockLink to="#">Luidsprekers</CatLinkBlockLink>
              <CatLinkBlockLink to="#">Stereo's</CatLinkBlockLink>
              <CatLinkBlockLink to="#">Televisies</CatLinkBlockLink>
            </CatLinkBlock>
          </CatLinkRow>
        </CatLinksSection>
      )}
      <LinksSection>
        <FooterLink>Blog</FooterLink>
        <FooterLink>Marktplaats Zakelijk</FooterLink>
        <FooterLink>Veilig en Succesvol</FooterLink>
        <FooterLink>Help en Info</FooterLink>
        <FooterLink>Voorwaarden</FooterLink>
        <FooterLink>Privacyverklaring</FooterLink>
        <FooterLink>Cookiebeleid</FooterLink>
        <FooterLink>Advertentievoorkeuren</FooterLink>
      </LinksSection>
      <LinksSection>
        <FooterLink>Over Marktplaats</FooterLink>
        <FooterLink>Werken bij</FooterLink>
        <FooterLink>Perskamer</FooterLink>
        <FooterLink>2dehands</FooterLink>
        <FooterLink>2ememain</FooterLink>
        <FooterLink>Sitemap</FooterLink>
      </LinksSection>
      <TextSection>
        <div>
          Marktplaats is niet aansprakelijk voor (gevolg)schade die voortkomt
          uit het gebruik van deze site, dan wel uit fouten of ontbrekende
          functionaliteiten op deze site.
        </div>
        <div>Copyright © 2022 Marktplaats B.V. Alle rechten voorbehouden.</div>
      </TextSection>
    </FooterEl>
  );
};

export default Footer;
