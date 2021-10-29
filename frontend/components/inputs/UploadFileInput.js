import React, {useRef, useState} from "react";
import {fetchPost} from "../../common";
import PropTypes from "prop-types";

export const handleSubmitFile = (event, setSubmitted, submitFileToAPI, tempFile) => {
    event.preventDefault();
    setSubmitted(prevSubmitted => ({...prevSubmitted, "file": true}));
    submitFileToAPI(tempFile, "file");
};

export const handleFileInput = (event, setTempFile) => {
    setTempFile(event.target.files[0]);
};

export const clearFile = (fileRef, setTempFile, setSubmitted) => {
    const file = fileRef.current;
    file.value = null;
    setTempFile(null);
    setSubmitted(prevSubmitted => ({...prevSubmitted, "file": false}));
};


const UploadFileInput = ({id, uploadSuccessfulCallback, apiEndpoint}) => {
    const [submitted, setSubmitted] = useState({"file": false});
    const [tempFile, setTempFile] = useState(null);
    const fileRef = useRef(null);

    const submitFileToAPI = (file, id, apiEndpoint, uploadSuccessfulCallback) => {
        const formData = new FormData();
        formData.append("type", "file");
        formData.append("id", id);
        formData.append("value", file, "tempfile.csv");
        fetchPost(apiEndpoint, formData, uploadSuccessfulCallback, false);
    };

    return (
        <>
            <form className="form-inline">
                <div className="form-group">
                    <input className="form-control my-3" type="file" ref={fileRef}
                        accept="text/csv" disabled={submitted.file}
                        onChange={(e) => handleFileInput(e, setTempFile)}/>
                    {tempFile &&
                    <button className="btn btn-secondary ml-1"
                        type="button"
                        onClick={(e) => clearFile(fileRef, setTempFile, setSubmitted)} disabled={tempFile === null}
                        data-dismiss="fileupload">Clear</button>
                    }
                </div>
                {tempFile &&
                <button id="upload-file" className="btn btn-primary ml-1"
                    disabled={tempFile === null}
                    type={"submit"}
                    onClick={(e) => handleSubmitFile(e, setSubmitted, submitFileToAPI, tempFile)}>
                    Upload file
                </button>
                }
            </form>
        </>
    );
};

UploadFileInput.propTypes = {
    id: PropTypes.number,
    uploadSuccessfulCallback: PropTypes.func,
    apiEndpoint: PropTypes.string,
};


export default UploadFileInput;
