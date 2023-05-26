import './App.css'
import Login from './components/Login'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { apiSplice } from "./api/apiSplice";
import { store } from "./app/store";
import { Provider } from "react-redux";
import Inicio from './components/Inicio';
import Historial from './components/Historial';
import Aperturas from './components/Aperturas';
import AnotherInicio from './components/AnotherInicio';

function App() {

  return (
    <div>
      <BrowserRouter>
        <ApiProvider api={apiSplice}>
          <Provider store={store}>
            <Routes>
              <Route path='/' element={<Login />} />
              <Route path='/inicio' element={<Inicio />} >
                <Route path='/inicio/anotherInicio' element={<AnotherInicio />} >
                  <Route path='/inicio/anotherInicio/aperturas' element={<Aperturas />} />
                  <Route path='/inicio/anotherInicio/historialYestadisticas' element={<Historial />} />
                </Route>
              </Route>
            </Routes>
          </Provider>
        </ApiProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
