import React from 'react'
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";
import { Link } from "react-router-dom";
function home() {
  return (
  <>
  <Hero>
        <Banner
          title="luxurious rooms"
          subtitle="deluxe rooms starting at 10,000 yen" >
          <Link to="/rooms" className="btn-primary">
            our rooms
          </Link>
        </Banner>
      </Hero>
      <Services/>
      <FeaturedRooms />
      </>
  );
};

export default home
