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
                    <p>{selectedImg.id}</p>
                    <button className="put-img-to-basket-button">Put the item to basket</button>
                </div>
            </div>
        </div>
    )
}
export default Modal