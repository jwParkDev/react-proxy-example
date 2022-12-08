import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import BookTable from './components/BookTable';
import DisplayBoard from './components/DisplayBoard';
import CreateBook from './components/CreateBook';
import { getAllBooks, createBook } from './services/BookService';
import { getAllTodos, createTodo } from './services/TodoService';
import Footer from './components/Footer';
import styled from 'styled-components';

const ModeChangeButtonWrapper = styled.div`
  width:350px;
  margin:0 auto;
  display:flex;
  /* flex-direction: column; */
  justify-content: space-between;
  align-items: center;
`;

function App () {
  const [mode, setMode] = useState('book');

  const [bookShelf, setBookShelf] = useState({});
  const [books, setBooks] = useState([]);
  const [numberOfBooks, setNumberBooks] = useState(0);

  const [todoShelf, setTodoShelf] = useState({});
  const [todos, setTodos] = useState([]);
  const [numberOfTodos, setNumberTodos] = useState(0);

  const modeHandler = () => {
    if (mode === 'book') {
      setMode('todo');
    } else if (mode === 'todo') {
      setMode('book');
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mode === 'book') {
      createBook(bookShelf)
      .then(() => {
        getAllBook()
        // setNumberBooks(numberOfBooks+1);
      });
    } else {
      createTodo(todoShelf)
      .then(() => {
        getAllTodo()
        // setNumberTodos(numberOfTodos+1);
      })
    }
  }

  const getAllBook = () => {
    getAllBooks()
      .then(data => {
        setBooks(data);
        setNumberBooks(data.length);
      });
  }

  const getAllTodo = () => {
    getAllTodos()
      .then(data => {
        setTodos(data);
        setNumberTodos(data.length);
      });
  }

  const handleOnChangeForm = (e) => {
      if (mode === 'book') {
        let inputData = bookShelf;
        if (e.target.name === 'book') {
          bookShelf.book = e.target.value;
        } else if (e.target.name === 'category') {
          bookShelf.category = e.target.value;
        } else if (e.target.name === 'author') {
          bookShelf.author = e.target.value;
        }
        setBookShelf(inputData);
      } else {
        let inputData = todoShelf;
        if (e.target.name === 'todo') {
          bookShelf.todo = e.target.value;
        } else if (e.target.name === 'category') {
          bookShelf.category = e.target.value;
        } else if (e.target.name === 'isComplete') {
          bookShelf.isComplete = e.target.value;
        }
        setBookShelf(inputData);
      }
  }

  return (
    <div className="main-wrapper">
      <div className="main">
        <Header />
        <ModeChangeButtonWrapper>
          <h2>{mode === 'book' ? 'Book 모드' : 'Todo 모드'}</h2>
          <button onClick={modeHandler}>모드 변경</button>
        </ModeChangeButtonWrapper>
        <CreateBook
          mode={mode}
          bookShelf={bookShelf}
          onChangeForm={handleOnChangeForm}
          handleSubmit={handleSubmit}
        />
        <DisplayBoard 
          mode={mode}
          numberOfBooks={numberOfBooks} 
          getAllBook={getAllBook}
          numberOfTodos={numberOfTodos}
          getAllTodo={getAllTodo}
        />
        <BookTable 
          mode={mode}
          books={books} 
          todos={todos}
        />
        <Footer />
      </div>
    </div>
  );
}

export default App;
