
import './App.css';
import Agriculturepage from './Components/Agriculturepage';
import Businesspage from './Components/Businesspage';
import Cinemapage from './Components/Cinemapage';
import Culturepage from './Components/Culturepage';
import Educationpage from './Components/Educationpage';
import Localpage from './Components/Localpage';
import Politicalpage from './Components/Politicalpage';
import Sportspage from './Components/Sportspage';
import Agridesc from './Components/internalroute/Agricdesc';
import Businessdesc from './Components/internalroute/Businessdesc';
import Cinemadesc from './Components/internalroute/Cinemadesc';
import Culturedesc from './Components/internalroute/Culturedesc';
import Educationdesc from './Components/internalroute/Educationdesc';
import Localdesc from './Components/internalroute/Localdesc';
import Politicaldescription from './Components/internalroute/Politicaldescription';
import Sportsdesc from './Components/internalroute/Sportsdesc';
import Container from './Container';
import Footer from './Footer';
import Header from './Header';
import News from './News';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Viewpdf from './Viewpdf';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
    <Routes>
            <Route  path="/" element={<News/>}/>
            <Route  path="/రాజకీయం" element={<Politicalpage/>}/>
            <Route  path="/క్రీడలు" element={<Sportspage/>}/>
            <Route  path="/విద్య" element={<Educationpage/>}/>
            <Route  path="/చిత్ర సీమ" element={<Cinemapage/>}/>
            <Route  path="/సాంస్కృతి" element={<Culturepage/>}/>
            <Route  path="/వ్యవసాయం" element={<Agriculturepage/>}/>
            <Route  path="/వ్యాపారం" element={<Businesspage/>}/>
            <Route  path="/స్థానిక వార్తలు" element={<Localpage/>}/>
            <Route  path="/రాజకీయం/:id" element={<Politicaldescription/>}  />
            <Route  path="/క్రీడలు/:id" element={<Sportsdesc/>}/>
            <Route  path="/విద్య/:id" element={<Educationdesc/>}/>
            <Route  path="/చిత్ర సీమ/:id" element={<Cinemadesc/>} />
            <Route  path="/సాంస్కృతి/:id" element={<Culturedesc/>}/>
            <Route  path="/వ్యవసాయం/:id" element={<Agridesc/>} />
            <Route  path="/వ్యాపారం/:id" element={<Businessdesc/>} />
            <Route  path="/స్థానిక వార్తలు/:id" element={<Localdesc/>} />
            <Route  path="/newspdf" element={<Viewpdf/>} />
      </Routes>
      <Footer/>
   </BrowserRouter>
    
    </div>
  );
}

export default App;
