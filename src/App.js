import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Header from './components/header';
import Footer from './components/footer';
import Content from './components/content';
import Read from './components/read';
import Create from './components/create';
import Movies from './components/movies';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/read" element={<Header></Header>} />
        <Route path="/create" element={<Footer></Footer>} />
        <Route path="/movies" element={<Content/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;