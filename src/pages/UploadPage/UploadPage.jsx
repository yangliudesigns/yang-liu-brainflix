import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import api from '../../usecase'; 
import UploadForm from "../../components/UploadForm/UploadForm";
import "./UploadPage.scss";

export default function UploadPage() {
    const navigate = useNavigate();
    const [uploadStatus, setUploadStatus] = useState(null);

    const handleUploadSubmitted = async (formData) => {
        try {
            console.log(formData); // 检查 FormData 内容
            const response = await api.post('/videos', formData);
            if (response.status === 201) {
                setUploadStatus("✅ Upload Successfully!");
                setTimeout(() => navigate("/"), 2000); 
            } else {
                setUploadStatus("❌ Upload failed. Please try again.");
            }
        } catch (error) {
            if (error.response) {
                console.error('Response data:', error.response.data);
                console.error('Response status:', error.response.status);
            } else {
                console.error('Error:', error.message);
            }
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
