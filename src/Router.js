// 1. Importaciones
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import CRUD from "./components/CRUD";
import Tsukino from "./components/CRUD/Tsukino";
import Layout from "./components/Layout";
import Countries from "./components/Countries";
import data from './countries.json'
import Country from './components/Country'


// Layout es la ruta padre que tiene dentro todos los demás elementos, usando dos etiquetas, una de cierre y otra de apertura, va a afectar a todas las rutas hijas, solo se tiene que establecer es el index que se usa en Home, usa el path de la ruta padre

// 2. Función
const Router = () => {
  // Arquitectura de Routing en React
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="crud" element={<CRUD />} />
            <Route path="tsukino" element={<Tsukino />} />
            <Route path="countries" element={<Countries allCountries={data}/>}> 
                <Route path=":id" element={<Country allCountries={data} />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
// 3. Exportación
export default Router;
