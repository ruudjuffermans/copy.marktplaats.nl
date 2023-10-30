import React from "react";
import styled, { css } from "styled-components";
import media from "utils/media";

const Layout = styled.section`
  height: 100%;
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  min-height: 100%;
  padding: 0;
  margin: 0;
  background-color: #fff;
  color: #2d3c4d;

  ${media.md(css``)};
`;

const LayoutHero = styled.section`
  width: 100%;
  z-index: 1;
  position: relative;

  ::after {
    position: absolute;
    width: 100%;
    height: 100%;
    content: " ";
    top: 0;
    left: 0;
    display: block;
    z-index: 0;

    background: linear-gradient(
      90deg,
      rgba(45, 60, 77, 0.9),
      rgba(45, 60, 77, 0.3)
    );

    ${media.lg(css`
      background: none;
    `)};
  }

  ${media.md(css``)};
`;

const LayoutSubHero = styled.section`
  background: #eae9ee;
  z-index: 1;
  width: 100%;
  padding: 20px;
  position: relative;

  ${media.md(css``)};
`;

const LayoutArrow = styled.section`
  width: 100%;
  background: #fff;
  z-index: 1;

  ${media.md(css``)};
`;

const Arrow = styled.div`
  border-top: 50px solid #eae9ef;
  border-left: 60px solid transparent;
  border-right: 60px solid transparent;
  bottom: 2px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  height: 0;
  width: 0;

  ${media.md(css``)};
`;

const ArrowContainer = styled.section`
  width: 100%;
  background: #2d3c4d;
`;

const WhiteArrow = styled.div`
  border-top: 50px solid #fff;
  border-left: 60px solid transparent;
  border-right: 60px solid transparent;
  bottom: 2px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  height: 0;
  width: 0;
`;

const SectionBlock = styled.section`
  margin-top: 24px;
  text-align: left;
  background-color: #fff;
  z-index: 1;
  width: 100%;
  padding: 20px;
  position: relative;

  ${media.md(css``)};
`;

const SectionFootBlock = styled.section`
  background: #2d3c4d;
  padding: 48px 20px;
  ${media.md(css``)};
`;

const Box1 = styled.div`
  width: 100%;
  z-index: 1;
  position: relative;

  margin: 80px auto;
`;

const Box2 = styled.div`
  width: 100%;
  max-width: 980px;
  margin-left: auto;
  margin-right: auto;

  ${media.md(css``)};
`;

const HeroContent = styled.div`
  width: 100%;
  max-width: 980px;
  margin: 50px auto;

  ${media.md(css``)};
`;

const HeroText = styled.div`
  -webkit-box-flex: 0;
  flex: 0 1 100%;
  font-size: 46px;
  line-height: 36px;
  font-weight: 500;
  margin-bottom: 30px;
  color: #fff;
  font-family: Roboto Slab;
  font-style: normal;
  line-height: 48px;
`;

const LayoutOffset = styled.div`
  width: 100%;
  max-width: 980px;
  margin-left: auto;
  margin-right: auto;
`;

const SubHeroBody = styled.div`
  margin-bottom: 36px;
  margin-top: 18px;

  margin-left: 10px;
  font-weight: 300;
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-size: 16px;
  line-height: 22px;
`;

const SubHeroHeading = styled.div`
  font-family: Roboto Slab;
  font-weight: 500;
  font-size: 32px;
  line-height: 40px;
  margin-top: 0px;
  margin-bottom: 12px;
  margin-left: 10px;
  margin-top: 12px;
`;

const FlexBox = styled.div`
  display: block;

  ${media.sm(css`
    display: -webkit-box;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
  `)};
`;

const FlexItem = styled.div`
  -webkit-box-flex: 1;
  flex: 1 1 20%;
  background: transparent;
  border-radius: 3px;
  margin: 10px;
  text-align: left;
`;

const HeroImage = styled.img.attrs({
  src: "/img/bg/header-safety-hub.jpeg",
})`
  position: absolute;
  right: 0;
  max-width: 2000px;
  opacity: 1;

  ${media.md(css``)};
`;

const ImageSvgSafety = styled.img.attrs({
  src: "/img/svg/safety.svg",
})`
  width: 100%;
  border-radius: 4px;
  max-width: 100% !important;
`;

const ImageSvgProtection = styled.img.attrs({
  src: "/img/svg/protection.svg",
})`
  width: 100%;
  border-radius: 4px;
  max-width: 100% !important;
`;

const TextBlockHeading = styled.h4`
  font-family: Roboto Slab;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  margin-top: 12px;
  margin-bottom: 12px;
`;

const TextBlockRight = styled.div`
  max-width: 100% !important;
  float: right;
  text-align: left;

  ${media.sm(css`
    max-width: 400px;
  `)};
`;

const TextBlockLeft = styled.div`
  max-width: 400px;
  float: left;
  text-align: left;
`;

const Paragraph = styled.div`
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-size: 16px;
  line-height: 22px;
  font-weight: 300;
`;

const FootBlockHeader = styled.h3`
  font-family: Roboto Slab;
  font-weight: 500;
  font-size: 32px;
  line-height: 40px;
  margin-top: 0px;
  margin-bottom: 12px;
  text-align: center;
  color: #fff;
`;

const FootBlockButton = styled.button`
  background: #fff !important;
  border-color: #116db4 !important;
  box-shadow: none !important;
  color: #116db4 !important;

  margin-bottom: 12px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 24px;

  font-family: Roboto Slab;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
`;
const Center = styled.div`
  text-align: center;
`;

const Information = () => {
  return (
    <Layout>
      <LayoutHero>
        <HeroImage />
        <Box1>
          <Box2>
            <HeroContent>
              <HeroText>
                <span>
                  Marktplaats <br /> <span>Veiligheidscentrum</span>
                </span>
              </HeroText>
            </HeroContent>
          </Box2>
        </Box1>
      </LayoutHero>
      <LayoutSubHero>
        <LayoutOffset>
          <SubHeroHeading>Veilig kopen en verkopen.</SubHeroHeading>
          <SubHeroBody>
            Elk jaar handelen er op Marktplaats miljoenen mensen met elkaar. Wij
            vinden veiligheid dan ook erg belangrijk. Daarom hebben we alle
            informatie over veilig handelen voor je op een rijtje gezet. Zodat
            jij zorgeloos deals kunt sluiten. Elke dag weer.
          </SubHeroBody>
        </LayoutOffset>
      </LayoutSubHero>
      <LayoutArrow>
        <Arrow />
      </LayoutArrow>
      <SectionBlock>
        <LayoutOffset>
          <FlexBox>
            <FlexItem>
              <ImageSvgSafety />
            </FlexItem>
            <FlexItem>
              <TextBlockRight>
                <TextBlockHeading>
                  Succesvol en veilig
                  <br />
                  <span style={{ color: "#eda566" }}>handelen.</span>
                </TextBlockHeading>
                <Paragraph>
                  Marktplaats bestaat al sinds 1999. Wij hebben dus een schat
                  aan ervaring op het gebied van veiligheid. Deze ervaring
                  hebben we gecombineerd met die van de politie. Samen hebben we
                  5 stappen opgesteld die je helpen om veilig te handelen.
                </Paragraph>
              </TextBlockRight>
            </FlexItem>
          </FlexBox>
        </LayoutOffset>
      </SectionBlock>
      <SectionBlock>
        <LayoutOffset>
          <FlexBox>
            <FlexItem>
              <TextBlockLeft>
                <TextBlockHeading>
                  Veiliger verzenden.
                  <br />
                  <span style={{ color: "#eda566" }}>Zorgeloos handelen.</span>
                </TextBlockHeading>
                <Paragraph>
                  Extra zekerheid bij verzenden? Met Kopersbescherming staat het
                  aankoopbedrag veilig op een tussenrekening totdat de koper de
                  aankoop heeft ontvangen én goedgekeurd.
                </Paragraph>
              </TextBlockLeft>
            </FlexItem>
            <FlexItem>
              <ImageSvgProtection />
            </FlexItem>
          </FlexBox>
        </LayoutOffset>
      </SectionBlock>
      <ArrowContainer>
        <WhiteArrow />
      </ArrowContainer>
      <SectionFootBlock>
        <LayoutOffset>
          <FootBlockHeader>
            Volg deze tips en je handelt
            <br />
            nog veiliger op Marktplaats. Succes!
          </FootBlockHeader>
          <Center>
            <FootBlockButton>Start met kopen en verkopen</FootBlockButton>
          </Center>
        </LayoutOffset>
      </SectionFootBlock>
    </Layout>
  );
};

export default Information;
