import './App.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home/Home';
import About from './About/About'
import Photosandphotostory from './Photosandphotostory/Photosandphotostory';
import Error404 from './Error404/Error404'
import Sircle from './Sircle/Circle';

 export default function App() {
  return (
    <>
    <Sircle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="photosandphotostory" element={<Photosandphotostory />} />
        </Route>
        
        <Route path='*' element={<Error404 />} />
      </Routes>      
    </>
  );
}

