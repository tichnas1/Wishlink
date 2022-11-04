import Header from './components/Header';
import Navbar from './components/Navbar';

import './App.css';

function App() {
  return (
    <div className='page-wrapper'>
      <Navbar />
      <Header />
      <main>Content</main>
    </div>
  );
}

export default App;
