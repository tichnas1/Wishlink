import { useEffect, useRef, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from './components/Header';
import Navbar from './components/Navbar';
import Brands from './components/Brands';
import Earnings from './components/Earnings';

import './App.css';

function App() {
  const mainSectionRef = useRef();
  const navbarRef = useRef();
  const [navActive, setNavActive] = useState(false);

  const onScroll = () => {
    const mainTop = mainSectionRef.current.getBoundingClientRect().top;
    const navHeight = navbarRef.current.getBoundingClientRect().height;

    setNavActive(mainTop < navHeight);
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className='page-wrapper'>
      <Navbar ref={navbarRef} active={navActive} />
      <Header />

      <main ref={mainSectionRef}>
        <Brands />
        <Earnings />
      </main>

      <ToastContainer />
    </div>
  );
}

export default App;
