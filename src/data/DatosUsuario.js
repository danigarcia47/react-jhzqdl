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
    avatar:'https://static-cdn.jtvnw.net/jtv_user_pictures/dc98211d-d9b9-468d-ab9d-0c8f2628e49e-profile_image-300x300.png',
  }
]