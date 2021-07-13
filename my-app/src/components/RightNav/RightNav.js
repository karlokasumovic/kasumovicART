import './RightNav.css'
import { Link } from 'react-router-dom'
import SoMeNav from '../SoMeNav/SoMeNav';
import KArtLogo from '../KArtLogo/KArtLogo';
import SoMeBox from '../SoMeBox/SoMeBox';
{/* put this if u coose to have a language button
import LanguageToggle from '../LanguageToggle/LanguageToggle';
*/}
const RightNav = ({ open, setOpen }) => {



    const RightNavShown = () => {
        if (open === false) {
            return (
                <div open={open} className="nav-div-closed">
                    <Link to="/biography" className="nav-link">biography</Link>
                    <Link to="/paintings" className="nav-link">paintings</Link>
                    <Link to="/otherart" className="nav-link">other art</Link>
                    <Link to="/basket" className="nav-link">basket</Link>
                    <KArtLogo classOption="k-art-logo-white"></KArtLogo>
                    <SoMeBox></SoMeBox>
                    <SoMeNav></SoMeNav>
                    {/* put this if u coose to have a language button
                    <LanguageToggle></LanguageToggle>*/}
                </div>
            )
        }
        else if (open === true) {
            return (
                <div open={open} className="nav-div-open">
                    <Link open={open} onClick={() => setOpen(!open)} to="/biography" className="nav-link">biography</Link>
                    <Link open={open} onClick={() => setOpen(!open)} to="/paintings" className="nav-link">paintings</Link>
                    <Link open={open} onClick={() => setOpen(!open)} to="/otherart" className="nav-link">other art</Link>
                    <Link open={open} onClick={() => setOpen(!open)} to="/basket" className="nav-link">basket</Link>
                    <KArtLogo classOption="k-art-logo-white"></KArtLogo>
                    <SoMeBox></SoMeBox>
                    {/* put this if u coose to have a language button
                    <LanguageToggle></LanguageToggle>*/}
                </div>
            )
        };
    };


    return (
        <>
            {RightNavShown()}
        </>

    )
}
export default RightNav