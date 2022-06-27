// import logo from './logo.svg';
import { Route, Routes } from 'react-router';
import './App.css';
import Blog from './Components/project1/Blog';
import Footer from './Components/project1/Footer';
import Home from './Components/project1/Home';
import ResponsiveAppBar from './Components/project1/Nav';
import Pricing from './Components/project1/Pricing';
import CheckWeather from './Components/project1/CheckWeather';
import SignUp from './Components/project1/SignUp';
import Login from './Components/project1/SignIn';


function App() {
  return (
    <div className="App">
      <ResponsiveAppBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='Blog' element={<Blog/>}/>
        <Route path='Pricing' element={<Pricing/>}/>
        <Route path='CheckWeather' element={<CheckWeather/>}/>
        <Route path='SignUp' element={<SignUp/>}/>
        <Route path='Login' element={<Login/>}/>
      </Routes>
      <Footer/>
      
    </div>
  );
}

export default App;
