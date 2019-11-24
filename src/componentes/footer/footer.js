import React from 'react';
import './footer.css';
import '../css/bulma.min.css';
function footer() {
    return(
        <div className="footer">
              <h1 name="titulo_footer" class="title is-3">Contactame</h1>
              <img src={require('../imagenes/contacto.jpg')} className="imagene" ></img>
              <ul>Facebook: zictcianz@hotmail.com</ul>
              <ul>Google: zictcianz@gmail.com</ul>
              <ul>WhatsApp: 9612757487</ul>
              <hr></hr>
              <p>Autor: Zictcian de Jesus Medina Flores</p>
              <p>4A IDS</p>
        </div>
    );
}

export default footer;