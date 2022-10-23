import React from "react";
import { Header, ListingCardContainer, Meta, Footer, MobileNavigation, ShowMap } from "../components";

const Home = () => {
  return (
    <div className="relative">
      <Meta />
      <Header />
      <ListingCardContainer />
      <Footer />
      <MobileNavigation />
      <ShowMap />
    </div>
  );
};

export default Home;
