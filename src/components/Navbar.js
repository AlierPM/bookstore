import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/" className="title">
        Bookstore CMS
      </Link>

      <ul>
        <li>
          <Link to="/book">BOOKS</Link>
        </li>
        <li>
          <Link to="/Category">Category</Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
