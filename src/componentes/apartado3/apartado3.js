import React from 'react';
import './apartado3.css';
import '../css/bulma.min.css';
function apartado3() {
    return(
        <div className="apartado3">
               <div class="box">
            <h1 name="titulo_apartado3" class="title is-3">Aplicaciones laborales</h1>
            <table>
            <tr>
                <td className="opciones">
                        <ol> <h2 name="subtitulo_apartado3" class="title is-4">lenguajes</h2></ol>
                        <ol>c</ol>
                        <ol>java</ol>
                        <ol>javaScript</ol>
                    </td>
                    <td className="td2">
                        
                        <h3 name="descripcion_apartado3" className="td2">Ultima experiencia laboral</h3>
                        <h4 name="contenido_apartado3" className="td2">En mis experiencias laborales han sido en un ambito
                        de programacion, realizando pequeños programas de busqueda y de modelado publicitario en las diferentes 
                        plataformas que la empresa tenia (Meraki proveedora de insumos y servicios de CA de CV) donde cada 
                        pequeño punto de la informacion es relevante para realizar una respuesta.</h4>
                </td>
            </tr>
        </table>
        <hr></hr>
        </div></div>
        
    );
}

export default apartado3;