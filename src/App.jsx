import Header from "./Header"
import ImgAndDescription from "./ImgAndDescription"
import ExpertiseCards from "./ExpertiseCards"
import FeaturedBooks from "./FeaturedBooks"
import FeaturedLectures from "./FeaturedLectures"
import LatestNews from "./LatestNews"
import Footer from "./Footer"
import Homepage from "./Homepage"
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from 'react-router-dom';
import BiographyPage from "./BiographyPage"
import Publications from "./Publications"

function App() {

  return (
    <> 
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Homepage />}></Route>

    <Route path="/BiographyPage" element={<BiographyPage></BiographyPage>}></Route>

    <Route path="/Publications" element={<Publications></Publications>}></Route>





    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
