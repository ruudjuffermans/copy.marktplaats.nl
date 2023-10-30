import Display from "components/Display";
import Icon from "components/Icon";
import React from "react";
import styled, { css } from "styled-components";
import media from "utils/media";
import BiddingForm from "./BiddingForm";

const displayContent = css`
  display: contents;
  ${media.sm(css`
    display: block;
  `)};
`;

const blockWrapper = css`
  background: #fff;
  box-shadow: 0 1px 2px rgb(0 0 0 / 15%), 0 -1px 2px rgb(0 0 0 / 5%);
  ${media.sm(css`
    border-radius: 4px;
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

const ASide = styled.aside`
  padding-left: 5px;
  padding-right: 5px;
  position: relative;
  width: 100%;
  flex: 0 0 100%;
  max-width: 100%;

  ${media.xxs(css`
    padding: 0 16px;
  `)};

  ${media.sm(css`
    flex: 0 0 33.33333%;
    max-width: 33.33333%;
  `)};

  ${media.md(css`
    padding: 0 0 0 12px;
  `)};

  ${displayContent}
`;

const SellerSidebar = styled.div`
  ${displayContent}
  ${blockWrapperM}
`;

const BiddingSidebar = styled.div`
  ${displayContent}
`;

const BiddingRoot = styled.div`
  order: 12;
  padding: 8px 16px 24px;
  position: relative;
  width: 100%;

  ::before {
    background: #fff;
    height: 2px;
    left: 0;
    position: absolute;
    top: -2px;
    width: 100%;
    content: "";
  }

  ${media.sm(css`
    margin-top: 24px;
    padding: 16px;

    ::before {
      content: none;
    }
  `)};

  ${blockWrapper}
`;

const SellerContainer = styled.div`
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  padding: 16px;

  :not(:last-child) {
    border-bottom: 1px solid #e5e5e4;
  }

  ${blockWrapperS}
`;

const SellerRoot = styled.div`
  margin-top: 24px;
  order: 28;
  padding: 0;
  width: 100%;

  ${media.sm(css`
    margin-top: 0px;
  `)};
  ${blockWrapperS}
`;

const SellerContact = styled.div`
  order: 8;
  padding: 8px 16px 24px;
  position: relative;
  width: 100%;
  ::before {
    background: #fff;
    height: 2px;
    left: 0;
    position: absolute;
    top: -2px;
    width: 100%;
    content: "";
  }

  ${media.sm(css`
    border-top: 1px solid #e5e5e4;
    padding: 16px;

    ::before {
      content: none;
    }
  `)};

  ${blockWrapperS}
`;

const SellerButton = styled.button`
  margin-bottom: 0;
  width: 100%;
  background-color: #116db4;
  border-color: #116db4;
  color: #fff;

  :not(:first-child) {
    margin-top: 10px;
  }

  :hover {
    background-color: #007bc5;
    border-color: #007bc5;
  }
`;

const SellerBlock = styled.div`
  color: #4b6179;
  margin-bottom: 8px;
`;

const SellerFollowButton = styled.button`
  font-family: BreeSerif, serif;
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

  float: right;
  padding: 0 8px;

  background-color: #fff;
  border-color: #116db4;
  color: #116db4;
`;

const SellerName = styled.span`
  display: block;
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  margin-right: 64px;
`;

const IconRow = styled.div`
  align-items: center;
  color: #4b6179;
  display: flex;
  margin-bottom: 8px;
`;

const BiddingTitle = styled.h3`
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  margin-bottom: 4px;
`;

const SellerLink = styled.a`
  text-decoration: none;
`;

const ProductASide = () => {
  return (
    <ASide>
      <SellerSidebar>
        <SellerRoot>
          <SellerContainer>
            <SellerBlock>
              <SellerFollowButton>
                <Icon
                  name={"person_add"}
                  weight="100"
                  size={"24px"}
                  color={"black"}
                />
              </SellerFollowButton>
              <SellerName>
                <SellerLink href="#">Johnny Visserd</SellerLink>
              </SellerName>
            </SellerBlock>
            <SellerBlock>4 maanden actief op Marktplaats</SellerBlock>
            <SellerBlock>
              <SellerLink href="#">Bekijk meer advertenties</SellerLink>
            </SellerBlock>
          </SellerContainer>
          <SellerContainer>
            <IconRow>
              <Icon
                style={{ marginRight: "8px" }}
                name={"location_on"}
                weight="100"
                size={"24px"}
                color={"black"}
              />
              <SellerLink href="#">Oss</SellerLink>
            </IconRow>
          </SellerContainer>
        </SellerRoot>

        <SellerContact>
          <SellerButton>Website</SellerButton>
          <SellerButton>Bericht</SellerButton>
          <SellerButton>Contact Info</SellerButton>
        </SellerContact>
      </SellerSidebar>
      <BiddingSidebar>
        <BiddingRoot>
          <BiddingTitle>Bieden</BiddingTitle>
          <BiddingForm />
        </BiddingRoot>
      </BiddingSidebar>
    </ASide>
  );
};

export default ProductASide;
