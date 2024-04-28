import React from "react";
import Hero from "../components/Hero";
import HomeSection1 from "../components/HomeSection1";
import Truts from "../components/Truts";
import DarkblueSection from "../components/DarkblueSection";
import HomeSection3 from "../components/HomeSection3";
import Whatwedo from "../components/Whatwedo";
import HomwBlogSection from "../components/HomwBlogSection";
import PeopleAtTheCenter from "../components/PeopleAtTheCenter";
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>الرئيسية
        </title>
      </Helmet>
      <Hero />
      <HomeSection1 />
      <Truts />
      <DarkblueSection />
      <HomeSection3 />
      <Whatwedo />
      <HomwBlogSection />
      <PeopleAtTheCenter />
    </>
  );
};

export default Home;
