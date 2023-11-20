// import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
// import Content from './components/Content';
import { Outlet, useLocation } from 'react-router-dom';



function App() {

  const currentPage = useLocation().pathname;

  const appStyle = {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  }

  return (
    <div style={appStyle}>
      <Header currentPage={currentPage}>
      </Header>
      {/* <Content /> */}
      <Outlet/>
      <Footer />
    </div>
  )
}

export default App;



