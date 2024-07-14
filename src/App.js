import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Skills from './components/Skills';
import Footer from './components/Footer';
import {Projects} from './components/Projects';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div >
        <NavBar/>
        <Banner/>
        <Skills/>
        <Projects/>
        <Footer/>
    </div>
  );
}

export default App;
