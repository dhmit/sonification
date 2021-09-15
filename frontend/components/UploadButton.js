import React, {useRef, useState} from "react";
import {getCookie} from "../common";


const UploadButton = () => {
    const [submitted, setSubmitted] = useState({"file": false});
    const [tempFile, setTempFile] = useState(null);
    const [uploadedData, setUplodedData] = useState(null);
    const fileRef = useRef(null);
    const handleSubmitFile = (event) => {
        event.preventDefault();
        setSubmitted(prevSubmitted => ({...prevSubmitted, "file": true}));
        submitFileToAPI(tempFile, "file");
    };

    const handleFileInput = (event) => {
        setTempFile(event.target.files[0]);
    };

    const clearFile = (event) => {
        const file = fileRef.current;
        file.value = null;
        setTempFile(null);
        setSubmitted(prevSubmitted => ({...prevSubmitted, "file": false}));
    };
    const submitFileToAPI = (file, inputType) => {
        const formData = new FormData();
        formData.append("tempfile", file, "tempfile.csv");
        const csrftoken = getCookie("csrftoken");
        const requestOptions = {
            method: "POST",
            headers: {
                "X-CSRFToken": csrftoken
            },
            body: formData
        };
        fetch("/api/upload-structured-data", requestOptions)
            .then(response => response.json())
            .then(data => {
                setUplodedData(data);
                console.log('uploaded data:', data, inputType);
            });
    };

    return (
        <>
            <form className="form-inline">
                <div className="form-group">
                    <input className="form-control my-3" type="file" ref={fileRef}
                        accept="text/csv" disabled={submitted.file}
                        onChange={handleFileInput}/>
                    {tempFile &&
                    <button className="btn btn-secondary ml-1"
                        type="button"
                        onClick={clearFile} disabled={tempFile === null}
                        data-dismiss="fileupload">Clear</button>
                    }
                </div>
                {tempFile &&
                <button id="upload-file" className="btn btn-primary ml-1"
                    disabled={tempFile === null}
                    type={"submit"}
                    onClick={handleSubmitFile}>
                    Upload file
                </button>
                }
            </form>
        </>
    );
};

export default UploadButton;
