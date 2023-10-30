import axios from "axios";
import Icon from "components/Icon";
import Cookies from "js-cookie";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const Section = styled.section`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 1px 2px rgb(0 0 0 / 15%), 0 -1px 2px rgb(0 0 0 / 5%);
  display: flex;
  flex-direction: column;
  max-width: 623px;
  padding: 32px;
  margin-top: 48px;
`;

const TopBanner = styled.div`
  background-color: #e1f3ee;
  color: #216d51;
  justify-content: center;
  justify-content: center;
  margin-bottom: 48px;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  padding: 16px;

  font-family: Roboto Slab, serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  margin-bottom: 48px;
`;

const Title = styled.h2`
  margin-bottom: 24px;
  font-family: Roboto Slab, serif;
  font-size: 32px;
  font-weight: 400;
  line-height: 40px;
  margin: 0;
  margin-bottom: 24px;
`;

const Paragraph = styled.p`
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  margin-bottom: 16px;
`;

const RegisterActivate = () => {
  const { token } = useParams();

  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  console.log(token);
  // console.log("hello");

  const activateSubmit = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/user/activate`,
        {
          token,
        }
      );
      console.log(response);

      // dispatch({ type: "ACTIVATE", payload: response });
      // Navigate("/account/registered");
    } catch (error) {
      // setLoading(false);
      console.log(error);
      // setError(error.response.data.message);
    }
  };

  useEffect(() => {
    console.log(token);
    activateSubmit();
  }, []);

  return (
    <Section>
      <Card>
        <TopBanner>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Icon name="check_circle" color="green" size="20px" />
          </div>
          <div
            style={{
              flexGrow: "0 !important",
              paddingLeft: "12px",
              alignItems: "center",
            }}
          >
            Account geactiveerd
          </div>
        </TopBanner>
        <Title>E-mail adres is gecontroleerd</Title>
        <Paragraph>
          <Link to="/account/login">
            Log in om toegang te krijgen tot Mijn Marktplaats
          </Link>
          .
        </Paragraph>
        <Paragraph>
          Of ga naar de <Link to="/">homepagina</Link>.
        </Paragraph>
      </Card>
    </Section>
  );
};

export default RegisterActivate;
