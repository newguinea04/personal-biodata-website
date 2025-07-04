import Logo from "./logo";

const Header = ({ text, onClicklogo, onClickOther }) => {
  return (
    <>
      <h1>Header</h1>
      <Logo text={text} onClick={onClicklogo} />
      <button onClick={onClickOther}>Coba Fungsi Lain</button>
    </>
  );
};

export default Header;
