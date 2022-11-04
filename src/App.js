import Header from './components/Header';
import Navbar from './components/Navbar';
import Brands from './components/Brands';
import Earnings from './components/Earnings';

import './App.css';

function App() {
  return (
    <div className='page-wrapper'>
      <Navbar />
      <Header />

      <main>
        <Brands />
        <Earnings />
      </main>
    </div>
  );
}

export default App;
