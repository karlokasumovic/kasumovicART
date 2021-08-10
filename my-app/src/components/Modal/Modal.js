import './Modal.css'

const Modal = ({ selectedImg, setSelectedImg }) => {

    const handleClick = (e) => {
        if (e.target.classList.contains('backdrop')) {
            setSelectedImg(null);
        }
    }
    return (
        <div className="backdrop" onClick={handleClick}>
            <div className="showed-box">
                <img src={selectedImg.url} alt="enlarged painting"></img>
                <div className="showed-box-text">
                    <p className="showed-box-painting-name">{selectedImg.paintingName}</p>
                    <p className="showed-box-painting-size">The size of the painting: {selectedImg.paintingSize}</p>
                    <p className="showed-box-painting-price">The price of the painting: {selectedImg.paintingPrice} kn</p>
                    <button className="put-img-to-basket-button">Put the item to basket</button>
                </div>
            </div>
        </div>
    )
}
export default Modal