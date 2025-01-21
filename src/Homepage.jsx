import React from 'react'
import Header from "./Header"
import ImgAndDescription from "./ImgAndDescription"
import ExpertiseCards from "./ExpertiseCards"
import FeaturedBooks from "./FeaturedBooks"
import FeaturedLectures from "./FeaturedLectures"
import LatestNews from "./LatestNews"
import Footer from "./Footer"
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react'

export default function Homepage() {

  const { pathname } = useLocation();

  useEffect(() => {
      window.scrollTo(0, 0)
  }, [pathname]);

  return (
    <>
    <Header></Header>
    <ImgAndDescription></ImgAndDescription>
    <ExpertiseCards></ExpertiseCards>
    <FeaturedBooks></FeaturedBooks>
    <FeaturedLectures></FeaturedLectures>
    <LatestNews></LatestNews>
    <Footer></Footer>
    </>
  )
}
