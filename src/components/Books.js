import Bookslist from './BooksList';
import Diplaybooks from './Displaybooks';
import classes from '../Styles/Books.module.css';

const Books = () => (
  <section className={classes.main}>
    <Bookslist />
    <Diplaybooks />
  </section>
);
export default Books;
