import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import TitleChanger from './components/TitleChanger';

function App() {
  return (
    <div className="App">
      <TitleChanger></TitleChanger>
      <Counter></Counter>
    </div>
  );
}

export default App;
