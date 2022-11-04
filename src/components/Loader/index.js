function Loader() {
  const size = 50;
  const strokeWidth = 4;

  const center = size / 2;
  const radius = center - strokeWidth / 2;

  return (
    <div className='loader'>
      <svg width={size} height={size}>
        <circle
          className='loader__circle'
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
        />
      </svg>
    </div>
  );
}

export default Loader;
