function Chip({ label, active, onClick }) {
  return (
    <div
      onClick={() => onClick(label, active)}
      className={'chip' + (active ? ' chip--active' : '')}
    >
      {label}
    </div>
  );
}

export default Chip;
