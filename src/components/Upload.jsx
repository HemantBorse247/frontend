import { useState } from 'react'
import React from 'react'
import axios from 'axios'

const Upload = () => {

    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileInput = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("file", selectedFile);
        console.log("file uploaded");
        axios.post("/trains", formData)
            .then()
            .catch(e => {
                console.log(e)
            })
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleFileInput} accept='.csv' />
                <button type="submit">Upload</button>
            </form>
        </div>
    )
}

export default Upload
