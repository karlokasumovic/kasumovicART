import { useState } from 'react';
import ProgressBar from './ProgressBar';

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const types = ['image/png', 'image.jpeg'];

    const changeHandler = (e) => {
        let selected = e.target.files[0];
        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError('')
        } else {
            setFile(selected); /*change this line to setFile(null) after*/
            setError("Please select an image file(png or jpeg)")
        }
    }

    return (
        <form>
            <input type="file" onChange={changeHandler}></input>
            <div className="output">
                {error && <div className="error">{error}</div>}
                {file && <div className="file-name">{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile}></ProgressBar>}
            </div>
        </form>
    )
}
export default UploadForm