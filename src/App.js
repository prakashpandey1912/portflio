import { useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

//css
import './App.css';

//pages
import Loading from './component/loader/Loading';

import HomePage from './pages/home/HomePage'
import AboutPage from './pages/about/About'
import Portfolio from './pages/portfolio/Portfolio'
import Contact from './pages/contact/Contact'
import Resume from './pages/resume/Resume'
import Blogs from './pages/blogs/Blogs'

function App() {

  useEffect(() => {
    console.clear();
  }, []);

  return (
    <div className="App">
      <Loading />
      {/* <Contact /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/about" exact element={<AboutPage />} />
          <Route path="/portfolios" exact element={<Portfolio />} />
          <Route path="/blogs" exact element={<Blogs />} />
          <Route path="/resume" exact element={<Resume />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div >
  );

}

export default App;
