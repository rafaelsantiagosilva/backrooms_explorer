import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/index';
import Rules from './pages/Rules';
import Bestiary from './pages/Bestiary';
import Room from './pages/Room';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/rooms/:type/:number' element={<Room />}></Route>
      <Route path='/rules' element={<Rules />}></Route>
      <Route path='/bestiary' element={<Bestiary />}></Route>
      <Route path='*' element={<NotFound />}></Route>
    </Routes>
  )
}