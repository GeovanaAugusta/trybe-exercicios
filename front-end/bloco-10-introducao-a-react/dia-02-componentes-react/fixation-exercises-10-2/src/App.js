// import logo from './logo.svg';
import './App.css';
import Image from './Image';
import React from 'react';

const info = {
  source: 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg',
  alternativeText: 'Cute cat staring',
}

class App extends React.Component {

  render() {
    return (
      <div>
        <Image source={ info.source } />
        <Image alternativeText={ info.alternativeText } />
      </div>
    );
  }
}

export default App;
