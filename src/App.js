import './App.css';
import React from 'react';
import NavBar from './components/NavBar.js';
import Titulo from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import swal from 'sweetalert';

export default function App() {

  const onAdd = (qty) => {
    swal({
      title: "Completado",
      text: "Agregaste " + qty + " productos",
      icon: "success",
    });
  };

  return (
    <>
      <NavBar />
      <Titulo titulo="Cositas Bonitas" />
      <ItemCount onAdd={onAdd} />
    </>
  );
}
