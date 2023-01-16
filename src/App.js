import React from 'react';
import Title from './components/header/header';
import Main from './components/main/main';
import Footer from './components/footer/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';




function App() {
  return (
    <div className='pt-3 text-light'>
      <Title img = 'https://i.pinimg.com/originals/10/36/da/1036da8b4b0597a780826f70a5a2bdc4.png' title = 'Saint Seiya' subtitle = 'Los caballeros dorados'/>
      <Main />
      <Footer text = 'Para mas información'/>
    </div>
  );
}

export default App;
