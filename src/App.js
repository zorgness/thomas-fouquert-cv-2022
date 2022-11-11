import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Info from './components/Info';
import Profile from './components/Profile';

function App() {

  const test = () => {
    for(let i = 0; i < 200; i++) {
        return (
          <br/>
        )

    }
  }

  return (
    <div className="App">

    <Header />

    <Info />
    {
      test()

    }
    <Profile />


    </div>
  );
}

export default App;
