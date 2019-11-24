import React from 'react';
import './apartado1.css';
import '../css/bulma.min.css';
function apartado1() {
    return(
        <div className="apartado1">
            <div class="container is-widescreen">
            <div class="notification">
            <table>
        <tr>
            <td>
                    <img src={require('../imagenes/perfil.jpg')} className="imagenes" ></img>
                </td>
                <td>
                    <h1 name="titulo_apartado1" class="title is-3">Acerca de mi</h1>
                    <h3 name="descripcion_apartado1">zictcian tiene mucha virtudes y cada uno es primordial para el
                    hoy en dia tiene una cuantas que debes conocer</h3>
                    <h4 name="contenido_apartado1">en el apartado profesional es un especialista en el desarrollo de la logica
                    computacional y es expecto tester en los diferentes estilos de videojuegos por aficion, esta perfecto en el 
                    ambito academico, sin mencionar que es soltero, con medicion de 1.73 metros, pesando 60 kilos y esperando 
                    conocer personas agradables del dia a dia.</h4>
            </td>
        </tr>
    </table>
    </div>
    </div>
    <hr></hr>
        </div>
    );
}

export default apartado1;