import arrowLeft from '../../assets/arrow-left.svg';

function Navbar() {
  return (
    <nav className='nav'>
      <img src={arrowLeft} alt='back' className='nav__icon' />
      <p>Brands</p>
    </nav>
  );
}

export default Navbar;
