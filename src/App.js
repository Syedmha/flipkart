import './App.css';
import Cathead from './componenets/cathead/cathead';
import Header from './componenets/header/header';
import Maincontent from './componenets/maincontent/maincontent';

function App() {
  return (
    <div className="App">
      <Header />
      <Cathead />
     <Maincontent />
    </div>
  );
}

export default App;
