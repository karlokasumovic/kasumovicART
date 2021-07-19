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
                <img src={selectedImg} alt="enlarged painting"></img>
                <div className="showed-box-text"><p>yo yo yo</p></div>
            </div>
        </div>
    )
}
export default Modal