import Homepage from "./Homepage"
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from 'react-router-dom';
import BiographyPage from "./BiographyPage"
import Publications from "./Publications"
import GalleryPage from "./GalleryPage"
import Contact from "./Contact"
import { HelmetProvider } from 'react-helmet-async';

function App() {

  return (
    <> 
    <HelmetProvider>
    <BrowserRouter>
    
    <Routes>
    <Route path="/" element={<Homepage />}></Route>

    <Route path="/BiographyPage" element={<BiographyPage></BiographyPage>}></Route>

    <Route path="/Publications" element={<Publications></Publications>}></Route>

    <Route path="/GalleryPage" element={<GalleryPage></GalleryPage>}></Route>

    <Route path="/Contact" element={<Contact></Contact>}></Route>

    </Routes>
    </BrowserRouter>
    </HelmetProvider>
    </>
  )
}

export default App
