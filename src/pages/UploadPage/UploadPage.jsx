import React from 'react'
import "./UploadPage.scss";
import UploadForm from "../../components/UploadForm/UploadForm";
import thumbnail from "../../assets/images/image9.jpeg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



export default function UploadPage() {

    const navigate = useNavigate();
    const [uploadValues, setUploadValues] = useState(null);

    useEffect(() => {
        document.title = `BrainFlix: Upload`;
    }, []);

    const handleUploadSubmitted = async (uploadData) => {
        const videoPostData = {
        ...uploadData,
        channel: "BrainFlix User",
        thumbnailUrl: thumbnail,
        };
        
        setUploadValues(videoPostData);
        setTimeout(() => navigate("/"), 3000);
        };
        
        const handleCancel = () => navigate("/");



    return (

    <main className="upload-page">
        <div className="upload-page__content">
            <h1 className="upload-page__title heading-page">Upload Video</h1>

            {uploadValues !== null || (
                <UploadForm
                onUpload={handleUploadSubmitted}
                onCancel={handleCancel}
                />
            )}

            {uploadValues !== null && (
                <div className="upload-page__success-container">
                    <img
                        className="upload-page__success-image"
                        src={uploadValues.thumbnailUrl}
                        alt="thumbnail"
                    />
                    <p className="upload-page__success-message">
                        '{uploadValues.title}' has been uploaded!
                    </p>
                </div>
            )}
        </div>
    </main>

    )
    }
