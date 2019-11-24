import React from 'react';
import '../css/bulma.min.css';

function apartado2() {
    return(
        <div className="apartado2">
            <div class="box">
        <table>
    <tr>
        <td>
                <img src={require('../imagenes/cetis138.jpg')} className="imagenes" ></img>
            </td>
            <td>
                <h1 name="titulo_apartado2" class="title is-3">Educacion</h1>
                <h2 name="subtitulo_apartado2">Centro de estudios tecnologicos industriales y servicios 138</h2>
                <h3 name="descripcion_apartado2">ultimo nivel de estudios </h3>
                <h4 name="contenido_apartado2">en el Centro de estudios tecnologicos industriales y servicios 138 o tambien
                conocido como cetis 138, mis estudios se han basado en programacion web, programacion orienntada
                a objetos y programacion estructurada, con los lenguajes de c++, c#,utilizando visual basic y un 
                gestor de hipertexto, etc.</h4>
        </td>
    </tr>
</table>
<hr></hr>
    </div></div>
    
    );
}

export default apartado2;