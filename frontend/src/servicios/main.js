import axios from "axios"
const URL = "http://localhost:3000/api";
function enviarFormularioContacto(datos){
    return axios.post(`${URL}/contacto`, datos)
}
function enviarFormularioSuscripcion(datos){
    return axios.post(`${URL}/suscripcion`, datos)
}
function loginUsuario(datos){
    return axios.post(`${URL}/login`, datos)
}
function registroUsuario(datos){
    return axios.post(`${URL}/registro`, datos)
}
function obtenerToken(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map(function(c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );
    return JSON.parse(jsonPayload);
  };
export {
    enviarFormularioContacto,
    enviarFormularioSuscripcion,
    loginUsuario,
    registroUsuario,
    obtenerToken
}