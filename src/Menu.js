
import React from "react";
import { inject, observer } from "mobx-react";
import cursosStore from "./stores/cursoCreador";
import './Menu.css';


class Menu extends React.Component {
    nombreRef = React.createRef();
    fotoRef = React.createRef();

    componentDidMount() {
        this.nombreRef.current = this.nombreRef.current || { value: null };
        this.fotoRef.current = this.fotoRef.current || { value: null };
    }

    render() {
        return (
            <div>
                <header>
                    <h1>LISTA DE CURSOS</h1>
                </header>
                <h2>Total de cursos: {cursosStore.totalCursos}</h2>
                <div id="añadirCurso">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            cursosStore.agregarCurso({
                                nombre: this.nombreRef.current.value,
                                foto: this.fotoRef.current.value
                            });
                            e.target.reset();
                        }}
                    >
                        <input
                            type="text"
                            placeholder="Nombre Curso"
                            required
                            ref={this.nombreRef}
                        />
                        <input
                            type="text"
                            placeholder="Foto del curso URL"
                            required
                            ref={this.fotoRef}
                        />
                        <button type="submit" id="guardar">Guardar</button>
                        <button
                            id="borrar_1"
                            onClick={() => {
                                cursosStore.eliminarCurso();
                            }}
                        >
                            Eliminar todos los cursos
                        </button>
                    </form>
                </div>
                <div id="mostrarCurso">
                    {cursosStore.cursos.map(curso => (
                        <li key={curso.nombre}>
                            <h3>{curso.nombre}</h3>
                            <img src={curso.foto} alt={curso.nombre} />
                            <button id="eliminar"
                                onClick={() => {
                                    cursosStore.eliminarCursoNombre(curso.nombre);
                                }}
                            >
                                Eliminar Curso
                            </button>
                        </li>
                    ))}
                </div>
            </div>
        );
    }
}

export default Menu;