import './SoMeNav.css'
import facebookicon from '../../icons/FacebookIcon.svg'
import instagramicon from '../../icons/InstagramIcon.svg'
const SoMeNav = () => {
    return (
        <div className="some-nav-div">
            <a className="some-nav-link" href="https://www.facebook.com/kasumovicART/" target="_blank" rel="noreferrer">
                <img src={facebookicon} alt="facebookicon" className="facebook-icon"></img>
            </a>
            <a className="some-nav-link" href="https://www.instagram.com/artbyiva/" target="_blank" rel="noreferrer">
                <img src={instagramicon} alt="instagramicon" className="instagram-icon"></img>
            </a>
        </div>
    )
}
export default SoMeNav