import Header from './components/Header/Header';
import './App.scss';
import VideoPage from "./pages/VideoPage/VideoPage";
import UploadPage from "./pages/UploadPage/UploadPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";


export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<VideoPage />} />
          <Route path="/video/:id" element={<VideoPage />} />
          <Route path="/upload" element={<UploadPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
