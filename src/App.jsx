import Header from './components/Header/Header';
import './App.scss';
import VideoPage from "./pages/VideoPage/VideoPage";
import UploadPage from "./pages/UploadPage/UploadPage";

export default function App() {

  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<VideoPage />} />
          <Route path=":id" element={<VideoPage />} />
          <Route path="upload" element={<UploadPage />} />
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