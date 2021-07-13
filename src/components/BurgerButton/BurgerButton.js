import { useState } from 'react'
import './BurgerButton.css'
import hamburgericon from '../../icons/HamburgerIcon.svg'
import xicon from '../../icons/XIcon.svg'
import RightNav from '../RightNav/RightNav'
const BurgerButton = () => {
    const [open, setOpen] = useState(false)



    const BurgerButtonShown = () => {
        if (open === false) {
            return (
                <img open={open} onClick={() => setOpen(!open)} src={hamburgericon} alt="hamburgericon" className="hamburger-icon"></img>
            )
        }
        else {
            return (
                <img open={open} onClick={() => setOpen(!open)} src={xicon} alt="xicon" className="x-icon"></img>
            )
        };
    };

    return (
        <>

            {BurgerButtonShown()}
            <RightNav open={open} setOpen={setOpen}></RightNav>
        </>
    )
}
export default BurgerButton