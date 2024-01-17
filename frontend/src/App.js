
import Project1 from './cardmenu.js';
import BProj from './borderproj.js';



import { BrowserRouter, Route, Routes, } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
        <Routes>
        
        <Route path='/proj1' element={<Project1/>}/>
        <Route path='/bproj' element={<BProj/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
