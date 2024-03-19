
import './App.css';
import Password from './password';
import Copy from './copy.png';
import Generator from './generate.png';
function App() {
  return (
    <div className="App">
      <Password 
      Copy = {Copy} 
      Generator = {Generator}
      />
    </div>
  );
}

export default App;
