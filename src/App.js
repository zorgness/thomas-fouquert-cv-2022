import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/flatly/bootstrap.css';
import Header from './components/Header';
import Contact from './components/Contact';
import Profile from './components/Profile';
import Language from './components/Language';
import Experience from './components/Experience';
import Education from './components/Education';
import Project from './components/Project';
import Skill from './components/Skill';
import AboutReact from './components/AboutReact';
import Footer from './components/Footer';

function App() {


  return (
    <div className="App">

    <Header />

    <div className='components container'>

    <Profile />

    <hr />

    <Contact />

    <hr />

    <Language />

    <hr />

    <Education />



    <Experience />

    <hr />

    <AboutReact />

    <hr />

    <Project />

    <hr />

    <Skill />

    </div>

    <Footer />


    </div>
  );
}

export default App;
