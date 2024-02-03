
import Project1 from './cardmenu.js';
import BProj from './borderproj.js';
import Project11 from './cardmenu2.js';


import { BrowserRouter, Route, Routes, } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
        <Routes>
        
        <Route path='/1' element={<Project1/>}/>
        <Route path='/bproj' element={<BProj/>}/>
        <Route path='/' element={<Project11/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
