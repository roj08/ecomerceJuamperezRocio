import './App.css';
import React from 'react';
import NavBar from './components/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer.jsx';

export default function App() {

  return (
    <>
      <NavBar />
      <ItemListContainer />

      
      <ItemDetailContainer id={1} />
    </>
  );
}
