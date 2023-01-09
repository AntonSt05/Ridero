import React from 'react';
import {Form, Card} from 'react-bootstrap';

const FormComponent = (props) => {
  const { 
    bookForEditing, setBookForEditing, 
    book, setBook, 
    avtor, setAvtor, 
    img, setImg,
    editBook, newBook
  } = props;

  return (
    <Card 
          className="form-input"
          text='white'
        >
          <div className="head">
            <h5>{bookForEditing ? 'Редактирование test...' : 'Добавьте новую test...'}</h5>
          </div>
          <Form>
            <Form.Control
              className='mt-3'
              placeholder='Название книги'
              value={bookForEditing ? bookForEditing.book : book}
              onChange={book => bookForEditing 
                ? setBookForEditing({...bookForEditing, book: book.target.value}) 
                : setBook(book.target.value)
              }
            />
            <Form.Control
              className='mt-3'
              placeholder='Автор'
              value={bookForEditing ? bookForEditing.avtor : avtor}
              onChange={avtor => bookForEditing 
                ? setBookForEditing({...bookForEditing, avtor: avtor.target.value}) 
                : setAvtor(avtor.target.value)
              }
            />
            <Form.Control
              className='mt-3'
              // type='file'
              placeholder='img'
              value={bookForEditing ? bookForEditing.img : img}
              onChange={img => bookForEditing 
                ? setBookForEditing({...bookForEditing, img: img.target.value}) 
                : setImg(img.target.value)
              }
            />
            <div className="book__buttons">
              <button 
                onClick={() => bookForEditing 
                  ? editBook(bookForEditing) 
                  : newBook()
                }
              >
                {bookForEditing ? 'Изменить' : 'Добавить'}
              </button>
            </div>
          </Form>
        </Card>
  );
}

export default FormComponent;
