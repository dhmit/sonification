import React, {useRef, useState} from 'react';
import PropTypes from "prop-types";

/**
 * A component for file input with a specified callback onSubmit (usually an API request).
 */
const FileInput = ({onSubmit}) => {
    const [submitted, setSubmitted] = useState(false);
    const [tempFile, setTempFile] = useState(null);
    const fileInputRef = useRef(null);

    const handleSubmitFile = (event) => {
        event.preventDefault();
        setSubmitted(true);
        onSubmit(tempFile);
    };

    const handleFileInput = (event) => {
        setTempFile(event.target.files[0]);
    };

    const clearFile = () => {
        const file = fileInputRef.current;
        file.value = null;
        setTempFile(null);
        setSubmitted(false);
    };

    return (
        <form className="form-inline">
            <div className="form-group">
                <input
                    className="form-control my-3"
                    type="file"
                    ref={fileInputRef}
                    accept="text/csv"
                    disabled={submitted}
                    onChange={handleFileInput}
                />
                {tempFile &&
                <button
                    className="btn btn-secondary ml-1" type="button"
                    onClick={clearFile}
                >Clear</button>
                }
                {tempFile && !submitted &&
                <button
                    id="upload-file" className="btn btn-primary ml-1"
                    type={"submit"}
                    onClick={handleSubmitFile}>
                    Upload file
                </button>
                }
            </div>
        </form>
    );
};

FileInput.propTypes = {
    onSubmit: PropTypes.func,
};

export default FileInput;
