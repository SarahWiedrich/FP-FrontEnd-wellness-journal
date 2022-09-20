//React Features

//Styling
import './App.css';


//Components
import Favorites from './Components/Favorites';
import Modal from './Components/Modal';
import Meals from './Components/Meals';
import Search from './Components/Search';
import Home from './Components/Home';


function App() {
  return (
    <div className="App">
      <main>
        {/* <Home /> */}
        <Search />
        {/* <Favorites /> */}
        <Meals />
        {/* <Modal /> */}
      </main>
    </div>
  );
}

export default App;
