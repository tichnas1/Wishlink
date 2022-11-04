function BrandCard({ brand }) {
  const { name, logo, highlight, bgColor } = brand;

  return (
    <div className='brand-card' style={{ backgroundColor: bgColor }}>
      <img src={logo} alt='' className='brand-card__logo' />

      <h3 className='brand-card__title'>{name}</h3>

      <p className='brand-card__highlight'>{highlight}</p>
    </div>
  );
}

export default BrandCard;
