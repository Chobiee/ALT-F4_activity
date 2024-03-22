import logo from './logo.svg';
import './App.css';
import StudentPage from './Component/Student/StudentPage/StudentPage';
import BookPage from './Component/Book/BookPage/BookPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<StudentPage />} />
        <Route path="book" element={<BookPage />} />
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
