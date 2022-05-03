import logoAwesome from '../../images/logo-awesome.svg';

const Header = () => {
  return (
    <header className='header'>
      <a href='./index.html'>
        <img className='header__img' src={logoAwesome} alt='Logo' />
      </a>
    </header>
  );
}

export default Header;