import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import HomePage from "./pages/HomePage/HomePage";
import UploadPage from "./pages/UploadPage/UploadPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Header from "./components/Header/Header";
import './App.scss'

function App() {
  let [uploaded, setUploaded] = useState(false);

  return (
    <>
      {/* set up router paths for homePage, uploaPage, and videoDetailsPage */}
      <BrowserRouter>
        <Header /> {/* Header component is the same for all routes/pages */}
        <Routes>
          {/* Create routes to homepage and uploadpage */}
          <Route path="/" element={<HomePage state={uploaded} setState={setUploaded}/>}/>
          <Route path="/upload" element={<UploadPage state={uploaded} setState={setUploaded}/>}/>
          {/* Create dynamic route for video details page */}
          <Route path="/videos" element={<HomePage />}/> {/* Not actually used */}
          <Route path="/videos/:id" element={<HomePage />}/>
          {/* Create route to not found page for non-matching paths */}
          <Route path="*" element={<NotFoundPage />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App