import './App.css';
import ResponsiveAppBar from './components/appbar';
import Cars from './components/villa';
import { Route,Routes } from 'react-router-dom';
import Pricing from './components/pricing';
import SignIn from './components/signin';
import Navbar from './components/navbar';
import BasicMenu from './components/DropDown';
import { color } from '@mui/system';
import { Rating } from '@mui/material';
import f1 from './components/Images/villa1.jpg'
import Duplex from './components/Duplex';
import AboutUs from './components/AboutUs'
import background from './components/Images/img2.jpg';
import img from './components/Images/villa1.jpg'
import Villa from './components/villa';
import Apartment from './components/Apartment';
import Request from './components/request';
import Profile from './components/Profile';
import Form from './components/signupForm';
import Button from '@mui/material/Button';
function ForMenu() {
  return (
    <div className="App" >
      <Navbar/>
    <Routes>
    <Route path='SignIn' element={<SignIn/>}></Route>
    <Route path= 'Villa' element={<Villa/>}/>
    <Route path='Apartment' element={<Apartment/>}/>
    <Route path='Request' element={<Request/>}/>
    <Route path='Pricing' element={<Pricing/>}/>
    <Route path='AboutUs' element={<AboutUs/>}/>
    <Route path='Profile' element={<Profile/>}/>
    <Route path='Form' element={<Form/>}/>
    
     </Routes> 
     
    </div>
  );
}

export default ForMenu;
