import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import classes from '../Styles/Navbar.module.css';

function Navbar() {
  return (
    <nav className={classes.navbar}>
      <Link to="/" className={classes.logo}>
        Bookstore CMS
      </Link>

      <div className={classes.navigation}>
        <Link to="/book" className="book">
          BOOKS
        </Link>

        <Link to="/Category" className="category">
          Category
        </Link>
      </div>
      <div className={classes.iconDiv}>
        <FaUserAlt className={classes.icon} />
      </div>
    </nav>
  );
}
export default Navbar;
