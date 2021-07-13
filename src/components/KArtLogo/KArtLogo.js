import './KArtLogo.css'
import { Link } from 'react-router-dom'
const KArtLogo = ({ classOption }) => {
    return (
        <Link to="/" className={classOption}>
            kasumovic ART
        </Link>
    )
}
export default KArtLogo