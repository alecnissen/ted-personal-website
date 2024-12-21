import React from 'react'
import Header from "./Header"
import ImgAndDescription from "./ImgAndDescription"
import ExpertiseCards from "./ExpertiseCards"
import FeaturedBooks from "./FeaturedBooks"
import FeaturedLectures from "./FeaturedLectures"
import LatestNews from "./LatestNews"
import Footer from "./Footer"

export default function Homepage() {
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
