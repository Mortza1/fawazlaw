import React from "react";
import ServicesHero from "../components/ServicesHero";
import DarkblueSection from "../components/DarkblueSection";
import HomeSection3 from "../components/HomeSection3";
import Truts from "../components/Truts";
import PeopleAtTheCenter from "../components/PeopleAtTheCenter";
import { Helmet } from 'react-helmet';

const Services = () => {
  return (
    <>
      <Helmet>
        <title>الخدمات
        </title>
      </Helmet>
      <ServicesHero />
      <HomeSection3 />
      <DarkblueSection />
      <Truts />
      <PeopleAtTheCenter />
    </>
  );
};

export default Services;
