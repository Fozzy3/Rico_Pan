
import { Header } from '../src/components/header/Header';
import { Navbar } from './components/header/Navbar';
import './App.css';
import { Quienes } from './components/main/Quienes';
import { Footer } from './components/footer/Footer';

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
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
