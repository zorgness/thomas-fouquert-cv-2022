import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/simplex/bootstrap.css';
import Header from './components/Header';
import Info from './components/Contact';
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

    <div className='container components'>

    <Profile />

    <hr />

    <Info />

    <hr />

    <Language />

    <hr />

    <Experience />

    <hr />

    <Education />

    <hr />

    <Project />

    <hr />

    <Skill />

    </div>


    </div>
  );
}

export default App;
