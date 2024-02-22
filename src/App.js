import React from 'react';
import {Provider} from "mobx-react";
import CursoCreador from "./stores/cursoCreador"
import Menu from "./Menu"

export default function App(){
  return <Provider CursoCreador={CursoCreador}>
    <Menu />
  </Provider>;
}