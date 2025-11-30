import './App.css';
import pck from '../package.json'
import DemoContent from './content/DemoContent/DemoContent'

function App() {

  return (
    <div className="app">
      <header className="appHeader">
      </header>
      <div className="appContainer">
        <DemoContent packageversion={pck.version} />
      </div>
    </div>
  );
}

export default App;
