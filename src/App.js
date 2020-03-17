import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Places from './Places.js';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={"https://assets.atlasobscura.com/media/W1siZnUiLCJodHRwczovL2F0bGFzLWRldi5zMy5hbWF6b25hd3MuY29tL21pc2MvbG9nb3MvT25lK0xpbmUrKENvbW1vbikvQXRsYXMrT2JzY3VyYStMb2dvK09uZStMaW5lK0NNWUsucG5nIl0sWyJwIiwiY29udmVydCIsIi1xdWFsaXR5IDgxIC1zdHJpcCJdXQ/Atlas%2BObscura%2BLogo%2BOne%2BLine%2BCMYK.png"} className="App-logo" alt="logo" />
        <h1>
          Atlas Obscura Tribute
        </h1>
        <Places />
      </header>
    </div>
  );
}

export default App;
