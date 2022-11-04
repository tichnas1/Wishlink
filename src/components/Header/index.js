import spiralBlack from '../../assets/header-spiral-black.svg';
import spiralWhite from '../../assets/header-spiral-white.svg';

function Header() {
  return (
    <header className='header'>
      <h3 className='header__title'>
        Make more money from
        <br />
        the products you share
      </h3>

      <p>
        Put any product, from the
        <br />
        brands available and
        <br />
        earn hefty commissions
      </p>

      <img src={spiralBlack} alt='' className='header__spiral' />
      <img src={spiralWhite} alt='' className='header__spiral' />
    </header>
  );
}

export default Header;
