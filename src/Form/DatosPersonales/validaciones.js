export const validarNombre = (nombre) => {
    const length = nombre.length
return( length > 1 && length < 30 ) ? true : false
};


export const validarApellidos = (Apellidos) => {
    const length = Apellidos.length
return( length > 1 && length < 50 ) ? true : false
};

export const validarTelefono = (telefono) => {
    const length = telefono.length
return( length >= 8 && length <= 12 ) ? true : false
};