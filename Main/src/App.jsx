// import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/Project';
import Content from './components/Content';

function App() {

  const appStyle = {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  }

  return (
    <div style={appStyle}>
      <Header />
      <Content />
      <Footer />
    </div>
  )
}

export default App;
