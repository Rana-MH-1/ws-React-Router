import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Home from './Pages/Home'
import './App.css';
import Error from './Pages/Error'
import Navbarr from './Components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfilePage from './Pages/Profile';

function App() {
  return (
    <Router>
      <Navbarr/>
      <Routes>
        <Route index element={<Home/>} ></Route>
        <Route path='/Profile/:idd' element={<ProfilePage/>} />
        <Route path='*' element={<Error/>} />
      </Routes>
    </Router>
  );
}

export default App;
