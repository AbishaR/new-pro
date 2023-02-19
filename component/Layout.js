import React from "react";
import { Header } from "../component/Header";
import { Footer } from "../component/Footer";
export const Layout = ({ children }) => {
  return (
    <div>
      <Header></Header>
      {children}
      <Footer></Footer>
    </div>
  );
};
