export const TitulosUsuario = {
id: 'Codigo',
field1: 'Nombre',
field2: 'Apellidos',
field3: 'Correo electrónico',
field4: 'Avatar',
};

export const DatosTablaUsuario = [
  {
    id: 'user1',
    nombre: localStorage.getItem('user'),
    apellidos : 'Garcia Llata',
    correo: localStorage.getItem('correo'),
    avatar: 'https://static.motor.es/f1/fichas/contenido/fernando-alonso/fernando-alonso2021_1617620146.jpg'
  }
]