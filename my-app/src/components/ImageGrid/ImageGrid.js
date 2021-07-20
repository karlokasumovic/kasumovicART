import './ImageGrid.css'
import useFirestore from '../../hooks/useFirestore'
const ImageGrid = ({ setSelectedImg }) => {
    const { docs } = useFirestore('images');
    console.log(docs)
    return (
        <div className="img-grid">
            {docs && docs.map(doc => (
                <div className="img-wrap" key={doc.id} onClick={() => setSelectedImg(doc)}>
                    {doc.id && <img className="img-img" src={doc.url} alt="uploaded from firebase"></img>}
                </div>
            ))}
        </div>
    )
}
export default ImageGrid