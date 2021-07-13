import './SoMeBox.css'
import facebookicon from '../../icons/FacebookIcon.svg'
import instagramicon from '../../icons/InstagramIcon.svg'
const SoMeBox = () => {
    return (
        <div className="some-box-box">
            <div className="some-box-div">
                <a className="some-box-link" href="https://www.facebook.com/kasumovicART/" target="_blank" rel="noreferrer">
                    <img src={facebookicon} alt="facebookicon" className="facebook-icon"></img>
                </a>
                <a className="some-box-link" href="https://www.instagram.com/artbyiva/" target="_blank" rel="noreferrer">
                    <img src={instagramicon} alt="instagramicon" className="instagram-icon"></img>
                </a>
            </div>
        </div>
    )
}
export default SoMeBox