import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './componentes/header/header';
import Apartado1 from './componentes/apartado1/apartado1';
import Apartado2 from './componentes/apartado2/apartado2';
import Apartado3 from './componentes/apartado3/apartado3';
import Apartado4 from './componentes/apartado4/apartado4';
import Footer from './componentes/footer/footer';
function App() {
  return (

    <div className="App">
        
        <Header></Header>
        <Apartado1></Apartado1>
        <Apartado2></Apartado2>
        <Apartado3></Apartado3>
        <Apartado4></Apartado4>
        <Footer></Footer>
    
    </div>
  );
}

export default App;
