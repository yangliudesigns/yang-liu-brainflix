import React from 'react'
import "./UploadForm.scss";
import { useRef, useState, useEffect } from "react";
import Button from "../../components/Button/Button";
import videoImage from "../../assets/images/Upload-video-preview.jpg";
import uploadIcon from "../../assets/images/upload.svg";



export default function UploadForm({onUpload, onCancel}) {

    const formRef = useRef();
    const [formValues, setFormValues] = useState({
        title: null,
        description: null,
        thumbnailFile: null,
        thumbnailUrl: videoImage,
    });

    //update the preview
    useEffect(() => {
        if (!formValues.thumbnailFile) {
        setFormValues((formValues) => ({
            ...formValues,
            thumbnailUrl: videoImage,
        }));
        return;
        }

        //declare URL to access the image
        const objectUrl = URL.createObjectURL(formValues.thumbnailFile);
        setFormValues((formValues) => ({ ...formValues, thumbnailUrl: objectUrl }));

        // when form is unmounted
        return () => URL.revokeObjectURL(objectUrl);
    }, [formValues.thumbnailFile]);



    //Submit handler 
    const handleSubmit = () => {
        onUpload({ ...formValues });
    };

    
     //updates state with form
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    };



   //updates state with thumbnail
    const handleSelectFile = (event) => {
        if (!event.target.files || event.target.files.length === 0) {
        setFormValues({ ...formValues, thumbnailFile: null });
        return;
        }
        setFormValues({ ...formValues, thumbnailFile: event.target.files[0] });
    };
    const isTitleValid = () => formValues.title?.length > 0;
    const isDescriptionValid = () => formValues.description?.length > 0;
    const isFormValid = () => isTitleValid() && isDescriptionValid();



    return (
        <form className="upload-form" ref={formRef}>

            <div className="upload-form__thumbnail-one">
                <label
                className="upload-form__label paragraph-labels upload-form__label--file"
                htmlFor="thumbnail"
                >
                    VIDEO THUMBNAIL

                    <img
                    className="upload-form__thumbnail"
                    src={formValues.thumbnailUrl}
                    alt="thumbnail"
                    />

                    <input
                    type="file"
                    className="upload-form__file-input"
                    id="thumbnail"
                    name="thumbnail"
                    accept="image/png, image/jpeg"
                    onChange={handleSelectFile}
                    />
                </label>
            </div>

            <div className="upload-form__fields-one">
                <label className="upload-form__label paragraph-labels" htmlFor="title">
                    TITLE YOUR VIDEO

                    <input
                    type="text"
                    className="upload-form__field"
                    id="title"
                    name="title"
                    placeholder="Add a title to your video"
                    value={formValues.title ?? ""}
                    onChange={handleChange}
                    />
                </label>

                <label className="upload-form__label paragraph-labels" htmlFor="description">
                    ADD A VIDEO DESCRIPTION

                    <textarea
                    className="upload-form__field paragraph-body upload-form__field--textarea"
                    id="description"
                    name="description"
                    placeholder="Add a description to your video"
                    value={formValues.description ?? ""}
                    onChange={handleChange}
                    />
                </label>
            </div>

            <div className="upload-form__buttons-one">
                <div className="upload-form__button-container">
                    <Button
                    text="PUBLISH"
                    icon={uploadIcon}
                    disabled={!isFormValid()}
                    onClick={handleSubmit}
                    />
                </div>

                <div className="upload-form__button-container">
                    <Button 
                    text="CANCEL" 
                    btnStyle="secondary" 
                    onClick={onCancel} 
                    />
                </div>
            </div>
    </form>
    )
    }

