import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/lux/bootstrap.css';
import Header from './components/Header';
import Contact from './components/Contact';
import Profile from './components/Profile';
import Language from './components/Language';
import Experience from './components/Experience';
import Education from './components/Education';
import Project from './components/Project';
import Skill from './components/Skill';

function App() {


  return (
    <div className="App">

    <Header />

    <div className='container components m-3'>

    <Profile />

    <hr />

    <Contact />

    <hr />

    <Language />

    <hr />

    <Education />

    <hr />

    <Experience />

    <hr />

    <Project />

    <hr />

    <Skill />

    </div>


    </div>
  );
}

export default App;
