import React from "react";
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import { AppProvider } from "../../components/StateProvider/StateProvider";

const HomePage = () => {
  return (
    <div className="home-page">
      <AppProvider>
        <HeaderBar></HeaderBar>
        <h1>Home Page </h1>
      </AppProvider>
    </div>
  );
};

export default HomePage;
