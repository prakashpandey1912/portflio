import { useEffect, useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';

//css
//import './App.css';
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from "@material-ui/core";

//pages
import Loading from './component/loader/Loading';

import HomePage from './pages/home/HomePage'
import AboutPage from './pages/about/About'
import Portfolio from './pages/portfolio/Portfolio'
import Contact from './pages/contact/Contact'
import Resume from './pages/resume/Resume'
import Blogs from './pages/blogs/Blogs'

function App() {
  const [webSiteTheme, setTheme] = useState('dark')

  useEffect(() => {
    console.clear();
    document.documentElement.className = webSiteTheme;
  }, [webSiteTheme]);

  return (
    <div className="App">
      {/* <Contact /> */}
      <div className="ham-burger-menu">
        <IconButton >
          <MenuIcon />
        </IconButton>
      </div>
      <MainContentStyled>
        <div className="lines">
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
          <div className="line-4"></div>
        </div>

        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/about" exact element={<AboutPage />} />
            <Route path="/portfolios" exact element={<Portfolio />} />
            <Route path="/blogs" exact element={<Blogs />} />
            <Route path="/resume" exact element={<Resume />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/loader" element={<Loading />} />
          </Routes>
        </BrowserRouter>


      </MainContentStyled>
    </div >
  );

}

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;
  @media screen and (max-width:1200px){
    margin-left: 0;
  }

  .lines{
    position: absolute;
    min-height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    opacity: 0.4;
    z-index: -1;
    .line-1, .line-2, .line-3, .line-4{
      width: 1px;
      min-height: 100vh;
      background-color: var(--border-color);
    }
  }
`;

export default App;
