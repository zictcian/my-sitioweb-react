import React from 'react';
import './header.css';
import '../css/bulma.min.css';

function header() {
    return(
       <div className="header">
                <div class="container">
                <div class="notification">
            <table>
                <tr>
                    <td>
                        <img src={require('../imagenes/imagenz.jpg')} className="imagenes" ></img>
                    </td>
                    <td className="espacio">
                        <h1 name="titulo_apartado0" class="title is-2">Zictcian de Jesus Medina Flores</h1>
                        <h3 name="subtitulo_apartado0">Curriculum de zictcian, extraordinario y representativo para
                        definir los aspectos claves de esta increible persona
                        </h3>
                    </td>
                </tr>
            </table>
            </div>
            </div>
            <hr></hr>
       </div>
    );
}

export default header;