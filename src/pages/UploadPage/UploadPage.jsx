import React, { useState } from 'react';
import "./UploadPage.scss";
import UploadForm from "../../components/UploadForm/UploadForm";
import { useNavigate } from "react-router-dom";
import api from '../../usecase'; 

export default function UploadPage() {
    const navigate = useNavigate();
    const [uploadStatus, setUploadStatus] = useState(null);

    const handleUploadSubmitted = async (uploadData) => {
        try {
            const response = await api.post('/videos', uploadData);
            if (response.status === 200) {
                setUploadStatus("✅ Upload Successfully!");
                setTimeout(() => navigate("/"), 3000); 
            } else {
                setUploadStatus("❌ Upload failed. Please try again.");
            }
        } catch (error) {
            console.error(error);
            setUploadStatus("❌ Upload failed. Please try again.");
        }
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
