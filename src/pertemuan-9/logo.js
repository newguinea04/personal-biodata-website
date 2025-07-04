const Logo = ({ text, onClicklogo }) => {
  return (
    <>
      <h1>Logo</h1>
      <p>{text}</p>
      <button onClicklogo={onClicklogo}>Klik Saya</button>
    </>
  );
};

export default Logo;
