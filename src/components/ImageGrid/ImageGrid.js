import './ImageGrid.css'
const ImageGrid = () => {
    return (
        <div>
            <div className="image-grid-div">
                <img className="img-displayed" src="/images-test/Grad 60x80.JPG" alt="Grad"></img>
                <img className="img-displayed" src="/images-test/Grad iznutra 60x80.JPG" alt="Grad"></img>
                <img className="img-displayed" src="/images-test/Magicna planeta 60x80.JPG" alt="Grad"></img>
            </div>
            <div className="image-grid-div">
                <img className="img-displayed" src="/images-test/Grad 60x80.JPG" alt="Grad"></img>
                <img className="img-displayed" src="/images-test/Grad iznutra 60x80.JPG" alt="Grad"></img>
                <img className="img-displayed" src="/images-test/Magicna planeta 60x80.JPG" alt="Grad"></img>
            </div>
            {/*} <br></br>
            <div className="image-grid-div">
                <img className="img-displayed" src="/images-test/Izgubljeni grad 50x70.JPG" alt="Grad"></img>
                <img className="img-displayed" src="/images-test/Meditacija 50x70.JPG" alt="Grad"></img>
    </div>*/}
        </div>
    )
}
export default ImageGrid