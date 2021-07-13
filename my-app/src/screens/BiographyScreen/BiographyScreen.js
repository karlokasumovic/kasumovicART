import './BiographyScreen.css'
const BiographyScreen = () => {
    return (
        <div className="main-div">

            <div>
                <p className="artist-bio">I was born in Zagreb, Croatia where I finished the School for applied art and design, department of architecture. I started to paint after high school, and in 2007. joined a group of painters led by the late profesor Dubravko Lepej. <br></br><br></br>During the last 15 years I participated in numerous group art shows and artists colonies. I had three solo art shows, in 2007., 2009. and 2020, and I am currently preparying for my fourth solo show in December 2021.  <br></br><br></br>Most of my works are acrylics on canvas, paper or cardboard but I also love to make a mixed medias and illustrations. My paintings are part of many private collections arround the Europe and USA.
                    All those years I pursued business career as well as art one, but lately I decided to dedicate the next part of my life exclusively to art.
                    For the past 28 years I have been blessed with a wonderful husband and we have three grown children.
                </p>
                <div className="img-grid">
                    <img className="artist-img-grid" src="/images-test/Iva5.jpg" alt="Grad"></img>
                    <img className="artist-img-grid" src="/images-test/Iva3.jpg" alt="Grad"></img>
                    <img className="artist-img-grid" src="/images-test/Iva1.jpg" alt="Grad"></img>
                </div>
            </div>
        </div>
    )
}
export default BiographyScreen