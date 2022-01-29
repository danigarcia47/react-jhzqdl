import React from 'react';

export function Perfil(){
  if(localStorage.getItem('user') == 'Dani'){
    return (
      <div>
        <h1>Mi perfil</h1>
        <p/>
        <h3>Nombre y apellidos:</h3>
        <h3>Email:</h3>
        <h3>Datos personales:</h3>
        <h3>Avatar</h3>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Datos no encontrados</h1>
      </div>
    );
  }

}