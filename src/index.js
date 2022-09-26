import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import NoPage from "./NoPage";
import Design from "./Design";
import Contact from "./Contact";
import Posts from "./Posts";
import PostForm from "./PostForm";
import Nav from "./Components/nav";
import Footer from "./Components/footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Nav />
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="design" element={<Design />} />
          <Route path="posts" element={<Posts />} />
          <Route path="contact" element={<Contact />} />
          <Route path="posts/new/create" element={<PostForm />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    <Footer />
  </React.StrictMode>
);
