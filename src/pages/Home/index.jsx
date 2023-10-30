import Listing from "./Listing";
import Icon from "components/Icon";
import Nav from "layouts/CategoryNav";
import React from "react";
import styled, { css } from "styled-components";
import media from "utils/media";
import Text from "components/Text";
import Box from "components/Box";

const PageContainer = styled.main`
  width: 100%;
  flex-direction: column;
  flex-wrap: wrap;
  flex: 1 0 auto;
`;

const PageContent = styled.div`
  padding: 24px 0;

  display: flex;
  flex-wrap: wrap;
  margin-left: auto;
  margin-right: auto;
  max-width: 1000px;
  width: 100%;

  ${media.lg(css`
    padding: 24px 0px;
  `)};
`;
const SectionBanner = styled.section`
  padding-left: 4px;
  padding-right: 4px;
  position: relative;
  width: 100%;
  flex: 0 0 100%;
  max-width: 100%;
`;

const ASide = styled.aside`
  padding-left: 4px;
  padding-right: 4px;
  position: relative;
  width: 100%;
  flex: 0 0 100%;
  max-width: 100%;

  ${media.sm(css`
    flex: 0 0 20.83333%;
    max-width: 20.83333%;
  `)};
  ${media.lg(css`
    max-width: 208px;
  `)};
`;

const SectionMain = styled.section`
  padding-left: 4px;
  padding-right: 4px;
  position: relative;
  width: 100%;
  flex: 0 0 100%;
  max-width: 100%;

  ${media.sm(css`
    flex: 0 0 79.16667%;
    max-width: 79.16667%;
  `)};
`;

const SectionFooter = styled.section`
  padding-left: 4px;
  padding-right: 4px;
  position: relative;
  width: 100%;
  flex: 0 0 100%;
  max-width: 100%;
`;

const NavigationMenu = styled.article`
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 1px 2px rgb(0 0 0 / 15%), 0 -1px 2px rgb(0 0 0 / 5%);
  flex-direction: column;

  display: none;

  ${media.sm(css`
    background: #fffbe3 !important;
    display: flex;
    margin-bottom: 24px;
    padding: 0 12px;
  `)};
`;

const NavigationTitle = styled.h5`
  color: #2d3c4d;
  display: block;
  font-family: Roboto, serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
`;
const NavigationWrapper = styled.a`
  display: flex;

  :not(:last-child) {
    margin-bottom: 16px;
  }
`;

const NavigationIcon = styled.span`
  display: block;
`;

const NavigationBody = styled.span`
  color: #2d3c4d;
  display: block;
  font-family: Roboto, serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  padding-left: 4px;
`;
const NavigationBodyTitle = styled.span`
  color: #116db4;
  cursor: pointer;
  text-decoration: none;

  :hover {
    color: #007bc5;
    text-decoration: underline;
  }
`;
const NavigationBodyDescription = styled.span`
  color: #2d3c4d;
  display: block;
`;

const LinksBlock = styled.div`
  display: none;
  padding: 12px 0;

  ${media.sm(css`
    display: block;
  `)};
`;

const MainRoot = styled.div`
  min-height: 100%;
`;

const MainMenu = styled.ol`
  background: #f7f7f6;
  border-bottom: 1px solid #e5e5e4;
  z-index: 39;
  position: sticky;
  top: 118px;

  display: flex;
  margin: 0;
  padding: 0;
  overflow-x: auto;

  li.active {
    cursor: default;
    border-bottom-color: #116db4;
  }
`;

const MenuItem = styled.li`
  cursor: pointer;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 8px;
  border-bottom: 3px solid transparent;
  white-space: nowrap;
  flex-grow: 1;

  :hover {
    background-color: #e7edf8;
    color: #007bc5;
  }
`;

const CardCollection = styled.section`
  align-items: start;
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  width: 100%;
`;

const CategoriesList = styled.ul`
  list-style: none;
  margin: 0;
  max-height: 3000px;
  overflow-y: hidden;
  padding: 0;
`;

const CategoryLI = styled.li`
  padding-bottom: 8px;
`;

const CategoryLink = styled.a`
  color: #116db4;
  cursor: pointer;
  text-decoration: none;
`;

const Home = () => {
  return (
    <>
      <Nav />
      <PageContainer>
        <PageContent>
          <SectionBanner />
          <ASide>
            <NavigationMenu>
              <LinksBlock>
                <Text type="h5">
                  <Box mb="12px">Uitgelicht</Box>
                </Text>
                <NavigationWrapper>
                  <NavigationIcon>
                    <Icon
                      name={"local_shipping"}
                      weight="100"
                      size={"24px"}
                      color={"black"}
                    />
                  </NavigationIcon>
                  <NavigationBody>
                    <NavigationBodyTitle>Auto's</NavigationBodyTitle>
                    <NavigationBodyDescription>
                      7500 nieuwe occasions per dag
                    </NavigationBodyDescription>
                  </NavigationBody>
                </NavigationWrapper>
                <NavigationWrapper>
                  <NavigationIcon>
                    <Icon
                      name={"currency_exchange"}
                      weight="100"
                      size={"24px"}
                      color={"black"}
                    />
                  </NavigationIcon>
                  <NavigationBody>
                    <NavigationBodyTitle>
                      Betalen en Verzenden
                    </NavigationBodyTitle>
                    <NavigationBodyDescription>
                      Snel en eenvoudig geregeld in Berichten
                    </NavigationBodyDescription>
                  </NavigationBody>
                </NavigationWrapper>
              </LinksBlock>
              <LinksBlock>
                <Box mb="12px">
                  <NavigationTitle>Groepen</NavigationTitle>
                </Box>

                <CategoriesList>
                  <CategoryLI>
                    <CategoryLink>Audio, Tv en Fotos</CategoryLink>
                  </CategoryLI>
                  <CategoryLI>
                    <CategoryLink>Audio, Tv en Fotos</CategoryLink>
                  </CategoryLI>
                  <CategoryLI>
                    <CategoryLink>Audio, Tv en Fotos</CategoryLink>
                  </CategoryLI>
                  <CategoryLI>
                    <CategoryLink>Audio, Tv en Fotos</CategoryLink>
                  </CategoryLI>
                </CategoriesList>
              </LinksBlock>
            </NavigationMenu>
            <LinksBlock />
            <LinksBlock />
            <LinksBlock />
          </ASide>
          <SectionMain>
            <MainRoot>
              <MainMenu>
                <MenuItem className="active">Voor jou</MenuItem>
                <MenuItem>In je buurt</MenuItem>
                <MenuItem>Trending</MenuItem>
              </MainMenu>

              <CardCollection>
                <Listing
                  title="een badasdasdawdasdasdasdasdsajas"
                  image="/robe.jpeg"
                  price="60 euro"
                />
              </CardCollection>
            </MainRoot>
          </SectionMain>
          <SectionFooter />
        </PageContent>
      </PageContainer>
    </>
  );
};

export default Home;
