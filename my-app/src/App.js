
import './App.css';
import AppHeader from './components/appHeader/AppHeader';
import AppPromo from './components/appPromo/AppPromo';
import AppSlider from './components/appSlider/AppSlider';
import AppComfort from './components/appComfort/AppComfort';



function App() {
  return (
    <div className="App">
      
      <AppHeader></AppHeader>
      <AppPromo></AppPromo>
      <AppSlider></AppSlider>
      <AppComfort></AppComfort>
      
     
    </div>
  );
}

export default App;
