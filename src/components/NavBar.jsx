import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/pokemon">Pokemon</Link>
        </li>

        {/* Let’s start by updating our nav bar with a link to the new component.
Add the following link to src/components/NavBar.jsx */}
        <li>
            <Link to="/pokemon/new">New Pokemon</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
