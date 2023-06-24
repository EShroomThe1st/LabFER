import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './Components/HomePage/Homepage';
import Detail from './Components/Detail/Detail';


const App = () => {

  return (
    <div>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/detail/:id' element={<Detail/>}/>
        </Routes>
    </div>
  );
};

export default App;