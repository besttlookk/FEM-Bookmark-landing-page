import React from "react";
import GoToTopButton from "../components/GoToTopButton";
import OverlayMenu from "../components/OverlayMenu";
import AppProvider from "../contexts/appContext";
import { Header } from "../layouts";
import Footer from "../layouts/Footer";
import GlobalStyle from "./GlobalStyles";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <GlobalStyle />
      <GoToTopButton />
      <AppProvider>
        <OverlayMenu />
        <Header />
        <main>{children}</main>
        <Footer />
      </AppProvider>
    </>
  );
};

export default Layout;
