import { useEffect } from 'react';
import { Routes, Route, BrowserRouter, Navigate, useNavigate, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import BurgerMenu from 'react-burger-menu'

import store from './store/store';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

//css
import './App.css';
import MenuIcon from '@material-ui/icons/Menu';
import CancelIcon from '@material-ui/icons/Cancel';
import { useHistory } from "react-router-dom";

//pages
import Loading from './component/loader/Loading';
import HomePage from './pages/home/HomePage'
import AboutPage from './pages/about/About'
import Portfolio from './pages/portfolio/Portfolio'
import Contact from './pages/contact/Contact'
import Resume from './pages/resume/Resume'
import Blogs from './pages/blogs/Blogs'

function App(props) {
  //const [webSiteTheme, setTheme] = useState('dark')
  useEffect(() => {
    console.clear();
    document.documentElement.className = 'dark';
  }, []);

  function getItems() {
    let items = [
      <Link to="/">
        <i className="fa fa-fw" />
        <span>Home</span>
      </Link>,
      <Link to="/about">
        <i className="fa fa-fw" />
        <span>About</span>
      </Link>,
      <Link to="/portfolios">
        <i className="fa fa-fw" />
        <span>Portfolios</span>
      </Link>,
      <Link to="/blogs">
        <i className="fa fa-fw" />
        <span>Blogs</span>
      </Link>,
      <Link to="/resume">
        <i className="fa fa-fw" />
        <span>Resume</span>
      </Link>,
      <Link to="/contact">
        <i className="fa fa-fw" />
        <span>Contact</span>
      </Link>
    ];
    return items;
  }

  function getMenu() {
    const Menu = BurgerMenu['slide'];
    return (
      <>
        <Menu
          id="Slide"
          customOpenIcon={<MenuIcon />}
          customCrossIcon={<CancelIcon />}
          pageWrapId={'page-wrap'}
          outerContainerId={'outer-container'}
          right={true}
          width={"250px"}
        >
          {getItems()}
        </Menu>
      </>
    );
  }


  return (
    <div className="App">
      <BrowserRouter>
        {console.log("route")}
        <div className="outer-container" style={{ height: '100%' }}>
          <div className="right">
            {getMenu()}
          </div>
          <MainContentStyled id="page-wrap">
            <Routes>
              <Route path="/" exact element={<HomePage currentRoute={props.currentRoute} />} />
              <Route path="/about" exact element={<AboutPage />} />
              <Route path="/portfolios" exact element={<Portfolio />} />
              <Route path="/blogs" exact element={<Blogs />} />
              <Route path="/resume" exact element={<Resume />} />
              <Route exact path="/contact" element={<Contact />} />
              <Route exact path="/loader" element={<Loading currentRoute={props.currentRoute} />} />
            </Routes>
          </MainContentStyled>
        </div>
      </BrowserRouter>
    </div >
  );

}

const MainContentStyled = styled.main`
      position: relative;
      // margin-left: 16.3rem;
      min-height: 100vh;
      @media screen and (max-width:1200px){
        margin - left: 0;
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


const mapStateToProps = ({ app }) => ({
  currentRoute: app.currentRoute,
  firstTime: app.firstTime
});

export default connect(mapStateToProps)(App);
