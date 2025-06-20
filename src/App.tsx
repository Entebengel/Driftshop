import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Shop from './pages/Shop';
import LiveryShop from './pages/LiveryShop';
import LiveryListe from './pages/LiveryListe';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/livery" element={<LiveryShop />} />
        <Route path="/liveryliste" element={<LiveryListe />} />
      </Routes>
    </Router>
  );
}

export default App;