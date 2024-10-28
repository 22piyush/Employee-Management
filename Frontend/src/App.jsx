import './App.css';
import Employee from './components/Employee';
import Footer from './components/Footer';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Employee />} />
          <Route path='/employees' element={<Employee />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
