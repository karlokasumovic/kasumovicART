import { useState } from 'react';
import ProgressBar from './ProgressBar';

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const types = ['image/png', 'image.jpeg'];

    const changeHandler = (e) => {
        let selected = e.target.files[0];

        const form = document.querySelector('.input-form');
        const inputForm1 = form.querySelector('#painting-name');
        const selectedName = inputForm1.value

        const inputForm2 = form.querySelector('#painting-size');
        const selectedSize = inputForm2.value

        const inputForm3 = form.querySelector('#painting-price');
        const selectedPrice = inputForm3.value

        let finalselected = selected
        finalselected.paintingName = selectedName;
        finalselected.paintingSize = selectedSize;
        finalselected.paintingPrice = selectedPrice;
        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError('')
        } else {
            console.log(finalselected)
            console.log(selectedName)
            setFile(finalselected); /*change this line to setFile(null) after*/
            setError("Please select an image file(png or jpeg)")
        }
    }

    return (
        <form className="input-form">
            <label htmlFor="painting-name">Painting name:</label>
            <input type="text" id="painting-name" name="painting-name"></input>
            <br></br> <br></br>
            <label htmlFor="painting-size">Painting size:</label>
            <input type="text" id="painting-size" name="painting-size"></input>
            <br></br> <br></br>
            <label htmlFor="painting-price">Painting price:</label>
            <input type="text" id="painting-price" name="painting-price"></input>
            <br></br> <br></br>
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