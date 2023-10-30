import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import CookieModal from "components/CookieModal";
import LoginModal from "components/LoginModal";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import Footer from "./Footer";
import Header from "./Header";
import UserMenu from "components/userMenu";

const PageContainer = styled.div`
  display: block;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 0;
  min-height: 100vh;
  padding: 0;
  background: #f7f7f6;
`;

const PageLayout = ({ listingsPage }) => {
  const [loginModal, setLoginModal] = useState(false);
  const [cookieModal, setCookieModal] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (loginModal || cookieModal) {
      document.body.classList.add("body-lock");
    } else {
      document.body.classList.remove("body-lock");
    }
  }, [loginModal, cookieModal]);

  useEffect(() => {
    const GDPR = Cookies.get("GDPR");
    if (GDPR === undefined) {
      setTimeout(() => setCookieModal(true), 2000);
    }
  }, []);

  useEffect(() => {
    const user = Cookies.get("user") ? JSON.parse(Cookies.get("user")) : null;
    if (user) {
      dispatch({
        type: "LOGIN",
        payload: { ...user },
      });
    }
  }, []);

  const handleGDPR = () => {
    Cookies.set("GDPR");
    setCookieModal(false);
  };
  return (
    <PageContainer>
      <LoginModal />
      <CookieModal />

      <UserMenu />
      <Header listingsPage={listingsPage} />
      <Outlet />
      <Footer listingsPage={listingsPage} />
    </PageContainer>
  );
};

export default PageLayout;
