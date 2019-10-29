import React from 'react';
import './App.css';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Sidebar from "./LeftSidebar/Sidebar";
import Main from "./Main/Main"

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Main/>
      <Footer />
    </div>
  );
}

export default App;
