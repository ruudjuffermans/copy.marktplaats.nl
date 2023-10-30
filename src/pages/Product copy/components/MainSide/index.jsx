import Display from "components/Display";
import Icon from "components/Icon";
import React from "react";
import styled, { css } from "styled-components";
import media from "utils/media";
import Gallery from "./Gallery";

const displayContent = css`
  display: contents;
  ${media.sm(css`
    display: block;
  `)};
`;

const blockWrapperS = css`
  background: #fff;
  box-shadow: 0 1px 2px rgb(0 0 0 / 15%), 0 -1px 2px rgb(0 0 0 / 5%);
  ${media.sm(css`
    background: none;
    border-radius: 0;
    box-shadow: unset;
  `)};
`;

const blockWrapperM = css`
  overflow: hidden;
  ${media.sm(css`
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 1px 2px rgb(0 0 0 / 15%), 0 -1px 2px rgb(0 0 0 / 5%);
  `)};
`;

const SectionMain = styled.section`
  position: relative;
  width: 100%;
  flex: 0 0 100%;
  max-width: 100%;

  ${media.xxs(css`
    flex: 0 0 100%;
    max-width: 100%;
  `)};

  ${media.sm(css`
    padding: 0 0 0 12px;

    flex: 0 0 66.66667%;
    max-width: 66.66667%;
  `)};

  ${media.md(css`
    padding: 0 12px 0 0;

    flex: 0 0 66.66667%;
    max-width: 66.66667%;
  `)};

  ${displayContent}
`;

const DisplayBlockWrapper = styled.div`
  ${displayContent}
  ${blockWrapperM}
`;

const DisplayWrapper = styled.div`
  ${displayContent}
`;

const DisplayBlockWrapperOther = styled(Display)`
  background: #fff;
  box-shadow: 0 1px 2px rgb(0 0 0 / 15%), 0 -1px 2px rgb(0 0 0 / 5%);

  margin-top: 24px;
  order: 36;
  padding: 16px 16px 24px;
  width: 100%;

  ${media.sm(css`
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 1px 2px rgb(0 0 0 / 15%), 0 -1px 2px rgb(0 0 0 / 5%);
    padding: 16px 24px 24px;
  `)};
`;

const ListingRoot = styled.div`
  background: #fff;
  order: 4;
  padding: 0;
  width: 100%;

  ${media.sm(css`
    background: none;
    border-bottom: 1px solid #e5e5e4;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 16px 24px;
  `)};
`;

const AttributesDisplay = styled.div`
  margin-top: 24px;
  order: 24;
  padding: 16px;
  width: 100%;

  ${media.sm(css`
    margin-top: 0;
    padding: 24px 24px 16px;
  `)};
  ${blockWrapperS}
`;

const AttributesTitle = styled.h2`
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  margin-bottom: 8px;

  ${media.sm(css`
    margin-bottom: 12px;
  `)};
`;

const DescriptionDisplay = styled.div`
  margin-top: 24px;
  order: 20;
  padding: 16px 16px 12px;
  width: 100%;

  ${media.sm(css`
    margin-top: 0;
    padding: 16px 24px 24px;
  `)};

  ${blockWrapperS}
`;

const DescriptionTitle = styled.h2`
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  margin-bottom: 8px;

  ${media.sm(css`
    margin-bottom: 12px;
  `)};
`;

const DescriptionText = styled.div`
  word-break: break-word;
`;

const SocialDisplay = styled.div`
  ${displayContent}
`;

const SocialContainer = styled.div`
  align-items: center;
  display: flex;
  flex: 0 0 100%;
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  margin-top: 24px;
  order: 16;
  padding: 12px 16px;

  ${media.sm(css`
    border-bottom: 1px solid #e5e5e4;
    margin-top: 0;
    padding: 16px 24px;
  `)};
  ${blockWrapperS}
`;

const SocialShare = styled.div`
  flex: 1;
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  margin-right: 12px;

  ${media.sm(css`
    flex: unset;
  `)};
`;

const SocialLink = styled.a`
  margin-right: 12px;
`;

const ReportDisplay = styled.div`
  ${displayContent}
`;

const ReportContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  order: 30;
  padding: 16px;
  width: 100%;

  ${media.sm(css`
    border-top: 1px solid #e5e5e4;
    flex-direction: row;
    margin-top: 0;
    padding: 16px 24px;
  `)};

  ${blockWrapperS}
`;

const ReportListingId = styled.span`
  color: #4b6179;
  flex-grow: 1;
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  margin-bottom: 12px;

  ${media.sm(css`
    margin-bottom: 0;
  `)};
`;

const ReportListingButton = styled.a`
  color: #116db4;
  cursor: pointer;
  text-decoration: none;
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  margin-bottom: 12px;

  ${media.sm(css`
    margin-bottom: 0;
  `)};
`;

const GalleryContainer = styled.div`
  flex: 0 0 100%;
  position: relative;

  ${media.sm(css`
    flex: 0 0 60%;
    overflow: hidden;
  `)};

  ${media.md(css`
    flex: 0 0 400px;
    overflow: hidden;
  `)};
`;

const Header = styled.header`
  flex: 0 0 100%;
  padding: 12px 76px 2px 16px;
  position: relative;

  ${media.sm(css`
    order: -1;
    padding: 0 160px 0 0;
  `)};
`;

const HeaderButton = styled.button`
  font-family: Roboto Slab, serif;
  font-size: 16px;
  font-weight: 400;
  padding: 0 16px;
  line-height: 42px;
  height: 44px;
  border: 1px solid;
  border-radius: 4px;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  text-decoration: none;

  padding: 0 8px;
  position: absolute;
  right: 16px;

  :after {
    background-image: radial-gradient(circle, #fff 10%, transparent 10.01%);
    background-position: 50%;
    background-repeat: no-repeat;
    content: "";
    display: block;
    height: 100%;
    opacity: 0;
    pointer-events: none;
    position: absolute;
    right: 0;
    transform: scale(10, 10);
    transition: transform 0.5s, opacity 1s;
    width: 100%;
  }

  ${media.sm(css`
    padding: 0 16px;
    right: 0;
  `)};

  span {
    display: none;
    ${media.sm(css`
      display: inline;
      margin-left: 4px;
    `)};
  }
`;

const HeaderTitle = styled.h1`
  font-family: Roboto Slab, serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
  word-break: break-word;
`;

const Information = styled.div`
  flex: 0 0 100%;
  padding: 0 16px;

  ${media.sm(css`
    flex: 1;
    padding: 0 0 0 24px;
  `)};
`;

const Stats = styled.div`
  color: #4b6179;
  flex: 0 0 100%;
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  margin: 8px 0 12px;
  padding: 0 16px 2px;

  ${media.sm(css`
    order: -1;
    padding: 0;
  `)};
`;

const StatsItem = styled.span`
  display: inline-block;
  margin-right: 24px;
`;

const InformationPrice = styled.div`
  font-family: Roboto Slab, serif;
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
`;

const InformationShipping = styled.div`
  margin-top: 12px;
  ${media.sm(css`
    margin-top: 8px;
  `)};
`;

const ShippingBadge = styled.div`
  padding: 4px 8px;
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  border-radius: 4px;
  display: inline-flex;

  background-color: #f7f7f6;
  color: #4b6179;

  color: #2d3c4d;
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  margin-right: 8px;

  ${media.sm(css`
    margin-top: 0;
  `)};
`;

const MainSide = () => {
  return (
    <SectionMain>
      <DisplayBlockWrapper>
        <DisplayWrapper>
          <ListingRoot>
            <GalleryContainer>
              <Gallery />
            </GalleryContainer>
            <Header>
              <HeaderButton>
                <Icon
                  name={"favorite"}
                  weight="100"
                  size={"24px"}
                  color={"black"}
                />
                <span>Bewaar</span>
              </HeaderButton>
              <HeaderTitle>Badjas van Cars, maat 92/98</HeaderTitle>
            </Header>
            <Information>
              <InformationPrice>€ 150,00</InformationPrice>
              <InformationShipping>
                <ShippingBadge>Ophalen</ShippingBadge>
              </InformationShipping>
            </Information>
            <Stats>
              <StatsItem>
                <Icon
                  name={"visibility"}
                  weight="100"
                  size={"24px"}
                  color={"black"}
                />
                674
              </StatsItem>
              <StatsItem>
                <Icon
                  name={"favorite"}
                  weight="100"
                  size={"24px"}
                  color={"black"}
                />
                264
              </StatsItem>
              <StatsItem>
                <Icon
                  name={"schedule"}
                  weight="100"
                  size={"24px"}
                  color={"black"}
                />
                sinds 1 sep. '22, 17:25
              </StatsItem>
            </Stats>
          </ListingRoot>
        </DisplayWrapper>
        <SocialDisplay>
          <SocialContainer>
            <SocialShare>Deel via</SocialShare>
            <SocialLink>
              <i className="social_share_twitter" />
            </SocialLink>
            <SocialLink>
              <i className="social_share_whatsapp" />
            </SocialLink>
            <SocialLink>
              <i className="social_share_messenger" />
            </SocialLink>
            <SocialLink>
              <i className="social_share_facebook" />
            </SocialLink>
            <SocialLink>
              <i className="social_share_email" />
            </SocialLink>
          </SocialContainer>
        </SocialDisplay>
        <AttributesDisplay>
          <AttributesTitle>Kenmerken</AttributesTitle>
        </AttributesDisplay>
        <DescriptionDisplay>
          <DescriptionTitle>Beschrijving</DescriptionTitle>
          <DescriptionText>
            Te koop audioquest DBS 72v luidsprekerkabels. 2 x 3 meter. Verkeren
            in goede staat. Batterijen een jaar oud.
          </DescriptionText>
        </DescriptionDisplay>
        <ReportDisplay>
          <ReportContainer>
            <ReportListingId>Advertentienummer: m1882686596</ReportListingId>
            <ReportListingButton>Meld aan Marktplaats</ReportListingButton>
          </ReportContainer>
        </ReportDisplay>
      </DisplayBlockWrapper>
      <DisplayBlockWrapperOther>Other items</DisplayBlockWrapperOther>
    </SectionMain>
  );
};

export default MainSide;
