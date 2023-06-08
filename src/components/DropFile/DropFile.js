import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Button, InputLabel } from '@mui/material';

import { cloudUploadSvg } from '../../assets';
import Utils from '../../utils/utils';

function DropFile({ label, maxSize = 10, accept = "image/*",options, ...props }) {
    const [files, setFiles] = useState([]);
    const { getRootProps, getInputProps, isDragActive,acceptedFiles } = useDropzone({
        accept: accept,
        multiple: false,
        maxSize: maxSize,
        ...options,
        // Callback function when files are dropped
        onDrop: acceptedFiles => {
            // Handle the dropped files here
            console.log(acceptedFiles);
            setFiles(acceptedFiles);
        }
    });
    const _id = `myInput__${Utils.generateId()}`;

    return (
        <div>
            {label && (
                <InputLabel
                    htmlFor={_id}
                    sx={{
                        marginBottom: "5px",
                        color: "#000",
                    }}
                >
                    {label}
                </InputLabel>
            )}
            <div {...getRootProps()} className={`my_dropzone ${isDragActive ? 'active' : ''}`}>
                <input {...getInputProps()} id={_id} />
                {isDragActive ? (
                    <div className='active__drop'>
                        <p>Drop the files here...</p>
                    </div>
                ) : (
                    <div className='inner_sec'>
                        <div className='icon_wrapper'>
                            <img src={cloudUploadSvg} alt="" />
                        </div>
                        <div className='__caption'>
                            <p>{files.length ? files[0].name : "Select a file or drag and drop here"}</p>
                            <p>{accept} , file size no more than {maxSize} mb</p>
                        </div>
                        <Button
                            variant='outlined'
                            type="button"
                            onClick={() => { }}
                        >
                            Select file
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default DropFile;