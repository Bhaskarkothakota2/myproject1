// import logo from './logo.svg';
import { Route, Routes } from 'react-router';
import './App.css';
import Blog from './Components/project1/Blog';
import Home from './Components/project1/Home';
import ResponsiveAppBar from './Components/project1/Nav';
import Pricing from './Components/project1/Pricing';
import Products from './Components/project1/Products';
import SignUp from './Components/project1/SignUp';

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='Blog' element={<Blog/>}/>
        <Route path='Pricing' element={<Pricing/>}/>
        <Route path='Products' element={<Products/>}/>
        <Route path='SignUp' element={<SignUp/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
