import React, {useRef, useState} from "react";
import {fetchPost} from "../../common";
import PropTypes from "prop-types";


const UploadFileInput = ({id, uploadSuccessfulCallback, apiEndpoint}) => {
    const [submitted, setSubmitted] = useState({"file": false});
    const [tempFile, setTempFile] = useState(null);
    const fileRef = useRef(null);
    const handleSubmitFile = (event) => {
        event.preventDefault();
        setSubmitted(prevSubmitted => ({...prevSubmitted, "file": true}));
        submitFileToAPI(tempFile, "file");
    };

    const handleFileInput = (event) => {
        setTempFile(event.target.files[0]);
    };

    const clearFile = () => {
        const file = fileRef.current;
        file.value = null;
        setTempFile(null);
        setSubmitted(prevSubmitted => ({...prevSubmitted, "file": false}));
    };

    const submitFileToAPI = (file) => {
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

UploadFileInput.propTypes = {
    id: PropTypes.number,
    uploadSuccessfulCallback: PropTypes.func,
    apiEndpoint: PropTypes.string,
};


export default UploadFileInput;
