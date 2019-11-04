import React from 'react';
import './App.css';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Sidebar from "./LeftSidebar/Sidebar";
import Main from "./Main/Main"
// import Expand from "./Expand";
// import Counter from "./Counter";
// import Copier from "./Copier";
// import Expand from "./Expand";

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
