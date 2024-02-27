import { Outlet } from 'react-router-dom';
import './App.css';
import NavItems from './components/NavItems';
import Home from './home/Home';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <NavItems/>
      <Outlet/>
      <Footer/>
    </>
  );
}
export default App
