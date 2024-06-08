import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/Home';
import AboutPage from './pages/about/AboutPage';
import Navbar from './components/Navbar/NavBar';
import SearchPage from './pages/search/SearchPage';
import AllPage from './pages/all/AllPage';
import DisplayPage from './pages/display/DisplayPage';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/about"
          element={
            <>
              <Navbar /> <AboutPage />
            </>
          }
        />
        <Route
          path="/all"
          element={
            <>
              <Navbar />
              <AllPage />
            </>
          }
        />
        <Route
          path="/search"
          element={
            <>
              <Navbar />
              <SearchPage />
            </>
          }
        />
        <Route
          path="/display/:id"
          element={
            <>
              <Navbar /> <DisplayPage />
            </>
          }
        />
      </Routes>
    </div>
  );
}
