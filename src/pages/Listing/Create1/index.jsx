import React from "react";
import styled, { css } from "styled-components";
import media from "utils/media";
import CreateListingForm from "./Form";

const Container = styled.div`
  background-color: #f0efed;
  display: flex;
  width: 100%;
  flex-direction: column;
  flex: 1 0 auto;
`;

const Content = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1000px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const Element = styled.div`
  padding: 20px 12px;
  position: relative;
  width: 100%;
  flex: 0 0 100%;
  max-width: 100%;
`;

const Header = styled.h1`
  font-family: Roboto Slab, "serif";
  font-style: normal;
  font-weight: 300;
  font-size: 32px;
  line-height: 40px;
  margin-bottom: 25px;
  text-align: center;
`;

const Card = styled.div`
  padding: 10px;
  margin: 0;
  border: none;
  box-shadow: 0 1px 4px 0 rgb(0 0 0 / 14%);
  border-radius: 3px;
  background-color: #fff;
`;

const CardHeader = styled.div`
  padding-left: 0;
  margin-bottom: 5px;
  ${media.sm(css`
    padding-left: 12px;
    margin: 15px 0;
  `)};
`;

const CardBody = styled.div`
  height: auto;
  position: relative;
  border: none;
  padding-left: 0;
  ${media.sm(css`
    padding: 10px 12px;
  `)};
`;

const CreateListing = () => {
  return (
    <Container>
      <Content>
        <Element>
          <Header>Advertentie plaatsen</Header>
          <Card>
            <CardHeader>
              <h2>Wat wil je verkopen?</h2>
            </CardHeader>
            <CardBody>
              <span>Selecteer een categorie</span>
              <CreateListingForm />
            </CardBody>
          </Card>
        </Element>
      </Content>
    </Container>
  );
};

export default CreateListing;
