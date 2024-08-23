import React from 'react'
import "./UploadPage.scss";
import axios from 'axios';
import UploadForm from "../../components/UploadForm/UploadForm";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const API_URL = "https://unit-3-project-api-0a5620414506.herokuapp.com";
const API_KEY = "3997877e-6e9c-4457-a46b-b1eb77309298";




export default function UploadPage() {

    const navigate = useNavigate();
    const [uploadValues, setUploadValues] = useState(null);

    const handleUploadSubmitted = async (uploadData) => {
        const videoPostData = {
            ...uploadData,
            channel: "BrainFlix User",
            thumbnailUrl: "https://unit-3-project-api-0a5620414506.herokuapp.com/images/image9.jpeg",
        };

        axios.post(`${API_URL}/videos?api_key=${API_KEY}`, videoPostData)
        .then(() => {
            setUploadValues({ ...uploadData });
            setTimeout(() => navigate("/"), 3000);
        })
        .catch(error => {
            console.error("Error uploading video:", error);
        });
    };

    const handleCancel = () => navigate("/");
    document.title = `BrainFlix: Upload`;



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
