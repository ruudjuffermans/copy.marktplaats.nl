import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "pages/Home";

import MainLayout from "layouts/MainLayout";
import AuthLayout from "layouts/AuthLayout";
import ProfileLayout from "layouts/ProfileLayout";
import UserView from "../state/UserView";
import UiView from "../state/UiView";
import Login from "pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Reset from "../pages/Auth/Reset";
import Information from "../pages/Information";
import Product from "../pages/Product";
import MyListings from "pages/Profile/MyListings";
import MyFavourites from "pages/Profile/MyFavorites";
import MyProfile from "pages/Profile/MyProfile";
import Messages from "pages/Messages";
import Notifications from "pages/Notifications";

import Forms from "pages/Forms";
import Post from "pages/Post";

import CreateListing from "pages/Listing/Create1";
import CreateListing2 from "pages/Listing/Create2";

// import LoginAccount from "pages/Account/Login";
// import ResetAccount from "pages/Account/Reset";
// import RegisterAccount from "pages/Account/Register";

function Router() {
  return (
    <Routes>
      <Route element={<MainLayout listingsPage={true} />}>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UserView />} />
        <Route path="/product" element={<Product />} />
        <Route path="/information" element={<Information />} />
      </Route>
      <Route element={<MainLayout listingsPage={false} />}>
        <Route path="/forms" element={<Forms />} />
        <Route path="/post" element={<Post />} />
        <Route path="/create" element={<CreateListing />} />
        <Route path="/create/:cat" element={<CreateListing2 />} />
        <Route element={<AuthLayout listingsPage={false} />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset" element={<Reset />} />
        </Route>
        <Route element={<ProfileLayout />}>
          <Route path="/profile/my-listings" element={<MyListings />} />
          <Route path="/profile/my-favorites" element={<MyFavourites />} />
          <Route path="/profile/my-profile" element={<MyProfile />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/notifications" element={<Notifications />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default Router;
