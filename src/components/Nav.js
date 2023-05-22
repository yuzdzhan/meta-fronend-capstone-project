import './Nav.css';

export function Nav() {
  return (
    <nav className='nav'>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/reservation">Reservations</a></li>
        <li><a href="/order">Order Online</a></li>
        <li><a href="/login">Login</a></li>
      </ul>

    </nav>
  );
}

