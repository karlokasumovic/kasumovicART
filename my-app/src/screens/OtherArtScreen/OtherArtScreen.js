import './OtherArtScreen.css'
const OtherArtScreen = () => {
    return (
        <>
            <div className="img-grid-main">
                <img className="img-other-art" src="/images-test/mini-collage.jpg" alt="Grad"></img>
                <img className="img-other-art" src="/images-test/mini-paintings.jpg" alt="Grad"></img>


                <div className="text-box-1"><p className="text-box-1-heading">Mini Collage</p> <p className="text-box-1-text">See different miniature collage creations</p></div>
                <div className="text-box-2"><p className="text-box-2-heading">Mini Painting</p> <p className="text-box-2-text">See different miniature painting creations</p></div>
            </div>
        </>
    )
}
export default OtherArtScreen