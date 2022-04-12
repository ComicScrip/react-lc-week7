import { NavLink } from 'react-router-dom';

const getNavlinkStyle = ({ isActive }) => ({
  color: isActive ? 'orange' : 'white',
});

export default function Header() {
  return (
    <header>
      <nav>
        <NavLink to='/' style={getNavlinkStyle}>
          Home
        </NavLink>

        <NavLink to='/articles' style={getNavlinkStyle}>
          Articles
        </NavLink>
      </nav>
    </header>
  );
}
