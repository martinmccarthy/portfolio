import './App.css';
import { Routes, Route, BrowserRouter as Router, Navigate} from 'react-router-dom'
import AboutPage from './Pages/AboutPage';
import HomePage from './Pages/HomePage';

function App() {

  return (
      <Router>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
      </Router>
  );
}

export default App;