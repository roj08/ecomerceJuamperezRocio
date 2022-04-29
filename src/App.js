import './App.css';
import React from 'react';
import NavBar from './components/NavBar.js';
import Titulo from './components/ItemListContainer';

export default function App() {
  return (
    <>
      <NavBar />
      <Titulo titulo="Cositas Bonitas" />
    </>
  );
}
