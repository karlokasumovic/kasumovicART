import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import NavigationBar from './components/NavigationBar/NavigationBar';
import ImageGrid from './components/ImageGrid/ImageGrid';
import BiographyScreen from './screens/BiographyScreen/BiographyScreen';
import BasketScreen from './screens/BasketScreen/BasketScreen';
import OtherArtScreen from './screens/OtherArtScreen/OtherArtScreen';
import PaintingsScreen from './screens/PaintingsScreen/PaintingsScreen';
import Modal from './components/Modal/Modal';
import { useState } from 'react';
import UploadPaintings from './screens/imports/UploadPaintings/UploadPaintings';
function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <BrowserRouter>
      <div className="App">
        <NavigationBar></NavigationBar>
        <Route path='/uploadaj-paintings' component={UploadPaintings}></Route>
        <Route path='/biography' component={BiographyScreen}></Route>
        <Route path='/paintings' component={PaintingsScreen}></Route>
        <Route path='/otherart' component={OtherArtScreen}></Route>
        <Route path='/basket' component={BasketScreen}></Route>
        <Route path='/' exact render={(props) => (
          <>
            <ImageGrid setSelectedImg={setSelectedImg}></ImageGrid>
            {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}></Modal>}
          </>
        )}></Route>
      </div >
    </BrowserRouter>
  );
}

export default App;