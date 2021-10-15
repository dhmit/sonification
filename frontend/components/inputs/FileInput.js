import React, {useRef, useState} from 'react';
import PropTypes from "prop-types";

/**
 * A component for file input with a specified callback onSubmit. An alternative to
 * UploadFileInput allowing for different handling of file inputs besides direct uploading to an
 * api endpoint.
 */
const FileInput = ({onSubmit}) => {
    const [submitted, setSubmitted] = useState({"file": false});
    const [tempFile, setTempFile] = useState(null);
    const fileRef = useRef(null);
    const handleSubmitFile = (event) => {
        event.preventDefault();
        setSubmitted(prevSubmitted => ({...prevSubmitted, "file": true}));
        onSubmit(tempFile);
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

FileInput.propTypes = {
    onSubmit: PropTypes.func,
};

export default FileInput;
