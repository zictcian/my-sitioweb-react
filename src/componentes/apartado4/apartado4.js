import React from 'react';
import './apartado4.css';
import '../css/bulma.min.css';
function apartado4() {
    return(
        <div className="apartado4">
            <div class="container is-fullhd">
            <div class="notification">
                <h1 name="titulo_apartado4" class="title is-3">Sueños y aspiraciones</h1>
                <table className="tablas">
                <tr className="td20">
                    <td className="td20">
                            <ul> <h2 name="subtitulo_apartado4">mis metas</h2></ul>
                            <ol>aprender 10 lenguajes de programacion</ol>
                            <ol>trabajar de desarrollador independiente</ol>
                            <ol>tener ingresos y una vida estable</ol>
                        </td>
                        <td className="td12">
                        <img src={require('../imagenes/sueños.jpg')} className="imagen" ></img>
                    </td>
                </tr>
            </table>
            <h4 name="contenido_apartado3" >En mis experiencias laborales han sido en un ambito
                            de programacion, realizando pequeños programas de busqueda y de modelado publicitario en las diferentes 
                            plataformas que la empresa tenia (Meraki proveedora de insumos y servicios de CA de CV) donde cada 
                            pequeño punto de la informacion es relevante para realizar una respuesta; deceo trabajar aqui.</h4>
            </div>
            </div>
            
            <hr></hr>
        </div>
    );
}

export default apartado4;