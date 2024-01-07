import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Main from './pages/Main';
import DifferentialGeometry from './pages/DifferentialGeometry';
import FunctionalAnalysis from './pages/functionalAnalysis';
import PomodoroClock from './components/PomodoroClock';
import ChapterPage from './pages/funanalChapters/spaces';

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Nav />
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/DiffGeo' element={<DifferentialGeometry />} />
                <Route path='/Funanal' element={<FunctionalAnalysis />} />
                <Route path='/Funanal/FunanalChapters/:id' element={<ChapterPage />} /> 
                <Route path ='Pomoclock' element={<PomodoroClock />} />
            </Routes>
        </>
    );
}

export default App;