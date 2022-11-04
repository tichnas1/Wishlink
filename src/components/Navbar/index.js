import { forwardRef } from 'react';

import arrowLeft from '../../assets/arrow-left.svg';

function Navbar({ active }, ref) {
  return (
    <nav className={'nav' + (active ? ' nav--active' : '')} ref={ref}>
      <img src={arrowLeft} alt='back' className='nav__icon' />
      <p>Brands</p>
    </nav>
  );
}

export default forwardRef(Navbar);
