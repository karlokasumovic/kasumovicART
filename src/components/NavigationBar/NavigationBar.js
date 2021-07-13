import './NavigationBar.css'
import KArtLogo from '../KArtLogo/KArtLogo'
import BurgerButton from '../BurgerButton/BurgerButton'
const NavigationBar = () => {
    return (
        <nav className="nav-container">
            <KArtLogo classOption="k-art-logo"></KArtLogo>
            <BurgerButton></BurgerButton>

        </nav>
    )
}
export default NavigationBar