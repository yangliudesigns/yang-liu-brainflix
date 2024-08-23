import React, { useState } from 'react';
import "./UploadPage.scss";
import UploadForm from "../../components/UploadForm/UploadForm";
import { useNavigate } from "react-router-dom";

export default function UploadPage() {
    const navigate = useNavigate();
    const [uploadStatus, setUploadStatus] = useState(null);

    const handleUploadSubmitted = (uploadData) => {
        setUploadStatus("✅ Upload Successfully!");
        setTimeout(() => navigate("/"), 3000); 
    };

    const handleCancel = () => navigate("/");
    document.title = `BrainFlix: Upload`;

    return (
        <main className="upload-page">
            <div className="upload-page__content">
                <h1 className="upload-page__title heading-page">Upload Video</h1>

                {uploadStatus && (
                    <p className="upload-page__status">{uploadStatus}</p>
                )}

                <UploadForm
                    onUpload={handleUploadSubmitted}
                    onCancel={handleCancel}
                />
            </div>
        </main>
    );
}
