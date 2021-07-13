import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import NavigationBar from './components/NavigationBar/NavigationBar';
import ImageGrid from './components/ImageGrid/ImageGrid';
import BiographyScreen from './screens/BiographyScreen/BiographyScreen';
import BasketScreen from './screens/BasketScreen/BasketScreen';
import OtherArtScreen from './screens/OtherArtScreen/OtherArtScreen';
import PaintingsScreen from './screens/PaintingsScreen/PaintingsScreen';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavigationBar></NavigationBar>
        <Route path='/biography' component={BiographyScreen}></Route>
        <Route path='/paintings' component={PaintingsScreen}></Route>
        <Route path='/otherart' component={OtherArtScreen}></Route>
        <Route path='/basket' component={BasketScreen}></Route>
        <Route path='/' exact render={(props) => (
          <>
            <ImageGrid></ImageGrid>
          </>
        )}></Route>
      </div >
    </BrowserRouter>
  );
}

export default App;