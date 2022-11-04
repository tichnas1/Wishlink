import Button from '../Button';

function Earnings() {
  return (
    <div className='earnings'>
      <Button
        text='Show earnings of my partnered brands'
        onClick={() => console.log('Show Earnings')}
        className='earnings__btn'
      />
    </div>
  );
}

export default Earnings;
