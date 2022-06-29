import React from 'react';
import logo from '../../logo.jpeg';

const Cards = (props) => {
  const { books, deleteBook, setBookForEditing } = props;

  return (
    <div className="card">
      {books.map(book => 
        <div className="book" key={book.id}>
          <div className="book__top">
            {book.img
              ?<img src={book.img} alt="book"/>
              :<img src={`${logo}`} alt="book"/>
            }
          </div>
          <div className="book__bottom">
              <p>{book.book}</p>
              <p>{book.avtor}</p>
          </div>
          <div className="book__buttons">
              <button onClick={() => deleteBook(book.id)}>Удалить</button>
              <button onClick={() => setBookForEditing(book)}>Редактировать</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cards;
