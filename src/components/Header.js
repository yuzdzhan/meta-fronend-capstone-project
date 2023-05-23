import { Nav } from './Nav';
import logo from '../images/Logo.svg';
import './Header.css';

export function Header() {
  return (
    <header className='container header'>
      <img src={logo} alt='logo' className='logo' />
      <Nav />
    </header>
  );
}

