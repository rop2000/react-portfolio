import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './main.js';
import { Link } from 'react-router-dom';



function App() {
  return (
    <div className="demo-big-content">
     <Layout>
        <Header className="header-color" title={<span><span style={{ color: '#ddd' }}>Uh </span><strong>Yeehaw</strong></span>}>
            <Navigation>
                <Link to="/resume">Resume</Link>   
                <Link to="/aboutme">About</Link>   
                <Link to="/projects">Projects</Link>   
                <Link to="/contact">Contact me</Link>   
            </Navigation>
        </Header>
        <Drawer className="drawercolor" title="Okay">
            <Navigation>
                <Link to="/resume">Resume</Link>   
                <Link to="/aboutme">About</Link>   
                <Link to="/projects">Projects</Link>   
                <Link to="/contact">Contact me</Link>   
            </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main/>
        </Content>
    </Layout>
    </div>
  );
} 

export default App;
