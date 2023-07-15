import BookCard from '@/components/BookCard';
import '../styles/Home.css';
import Books from '@/data/BooksData';

const Home = () => {
  return (
    <div className="home">
      <h2>Our Latest Books</h2>
      <div className="books">
        {Books.map((book) => (
          <BookCard key={book._id} {...book} />
        ))}
      </div>
    </div>
  );
};

export default Home;
