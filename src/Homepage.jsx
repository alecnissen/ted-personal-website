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
import tedImg from './Assets/Public.Hist.The.Thinker.jpg';
import { Helmet } from 'react-helmet-async';

export default function Homepage() {

  const { pathname } = useLocation();

  useEffect(() => {
      window.scrollTo(0, 0)
  }, [pathname]);

  return (
    <>
      <Helmet>
        <title>Theodore Karamanski's Offical Website</title>
        <meta name="description" content="Explore the official website of Professor Emeritus Theodore Karamanski, featuring his biography, published works, lectures, areas of expertise, and the latest news. Contact him for speaking engagements and more." />
        <meta name="keywords" content="Professor Emeritus, Loyola University Chicago, Traveling speaker, Professor Theodore Karamanski, Maritime History, Public History, Indian History, Civil War History, Military History, Viking History, Canadian History, Environmental History, Rally Round the Flag: Chicago and the Civil War, Deep Woods Frontier: A History of Logging in Northern Michigan, Mastering The Inland Seas, Schooner Passage: Sailing Ships and the Lake Michigan Frontier, Academic Lecturer, Historical Consultant, Keynote Speaker, American History, Great Lakes History, Environmental Studies, Cultural History, Historical Research, Historiography, Naval History, Frontier History, Educational Speaker, Public Speaking Engagements, Historical Conferences, History Author" />
        <meta property="og:title" content="Homepage" />
        <meta property="og:description" content="Explore the official website of Professor Emeritus Theodore Karamanski, featuring his biography, published works, lectures, areas of expertise, and the latest news. Contact him for speaking engagements and more." />
        <meta property="og:image" content={tedImg} />
        <meta property="og:url" content="https://tedkaramanski.com/" />
    </Helmet>

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
