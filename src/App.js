
import { Header } from '../src/components/header/Header';
import { Navbar } from './components/header/Navbar';
import './App.css';
import { Quienes } from './components/main/Quienes';
function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
        <Header />
      </header>
      <main>
        <Quienes />
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
