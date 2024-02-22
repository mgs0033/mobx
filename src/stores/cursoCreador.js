import { makeObservable, observable, action, computed, reaction } from 'mobx';

class CursoStore {
    cursos = [];

    constructor() {
        const tiendaCurso = localStorage.getItem('cursos');
        if (tiendaCurso) {
            this.cursos = JSON.parse(tiendaCurso);
        }

        makeObservable(this, {
            cursos: observable,
            agregarCurso: action,
            eliminarCurso: action,
            eliminarCursoNombre: action,
            totalCursos: computed
        });

        reaction(
            () => JSON.stringify(this.cursos),
            cursoStr => {
                localStorage.setItem('cursos', cursoStr);
            }
        );
    }

    agregarCurso(curso) {
        this.cursos.push(curso);
    }

    get totalCursos() {
        return this.cursos.length;
    }

    eliminarCurso() {
        this.cursos = [];
    }

    eliminarCursoNombre(nombre) {
        this.cursos = this.cursos.filter(curso => curso.nombre !== nombre);
    }
}

const cursosStore = new CursoStore();
export default cursosStore;