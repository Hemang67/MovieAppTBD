import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ErrorPage from './pages/ErrorPage';
import "./styles/custom.css"
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import WatchList from './pages/WatchList';
import SingleMovie from './pages/SingleMovie';
import Loader from './components/Loader';

// Import the Home component lazily
const LazyHome = React.lazy(() => import('./pages/Home'));

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Suspense fallback={<Loader />}><LazyHome /></Suspense>} />
        <Route path="/single-movie/:id" element={<SingleMovie />} />
        <Route path="/watchlist" element={<WatchList />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
