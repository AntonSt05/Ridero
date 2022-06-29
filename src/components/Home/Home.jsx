import React, { useEffect, useState } from "react";
import './Home.scss';
import {v4 as uuidv4} from 'uuid';
import Cards from './../Cards/Cards';
import Form from './../Form/Form';

const Home = () => {
  const [book, setBook] = useState('');
  const [avtor, setAvtor] = useState('');
  const [img, setImg] = useState('');
  const [books, setBooks] = useState(
    JSON.parse(localStorage.getItem('books')) || []
  );
  const [bookForEditing, setBookForEditing] = useState(null);

  useEffect(()=> {
    localStorage.setItem('books', JSON.stringify(books))
  }, [books]);

  const newBook = () => {
    if (book.trim() !== '') {
      const newBook = {
        id: uuidv4(),
        book: book,
        avtor: avtor,
        img: img
      };
      setBooks((books) => [...books, newBook]);
      setBook('');
    } else {
      alert('Добавте книгу...');
      setBook('');
    }
  }

  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };
  
  const editBook = (book) => {
    setBooks(books.map((_book) => _book.id === book.id ? book : _book));
    setBookForEditing(null);
  };

  return (
    <div className="main">
      <div className="container">
        <Form 
          bookForEditing={bookForEditing} 
          setBookForEditing={setBookForEditing} 
          book={book} 
          setBook={setBook} 
          avtor={avtor}
          setAvtor={setAvtor}
          img={img}
          setImg={setImg}
          editBook={editBook}
          newBook={newBook}
        />
        <Cards books={books} deleteBook={deleteBook} setBookForEditing={setBookForEditing} />
      </div>
    </div>
  );
};

export default Home;
