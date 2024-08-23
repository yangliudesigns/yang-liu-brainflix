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
          <Route path="upload" element={<UploadPage />} />
          <Route path="/" element={<VideoPage />} />
          <Route path="/:id" element={<VideoPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}








// const [currentVideo, setCurrentVideo] = useState(infodata[0]);

// const handleVideoSelect = (videoId) => {
//   const selectedVideo = infodata.find((video) => video.id === videoId);
//   setCurrentVideo(selectedVideo);
// };