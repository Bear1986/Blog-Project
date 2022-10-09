import React from 'react';
import { Header } from './components/Header.jsx';
import Navbar from './components/Navbar.jsx';
import { Layout } from './components/Layout.jsx';


function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Layout/>
    </div>
  );
}

export default App;
