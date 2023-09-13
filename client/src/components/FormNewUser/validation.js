

const regexEmail = /^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

const regexUppercaseNumber = /^(?=.*[A-Z])(?=.*\d)/;

const regexLength = /^.{6,10}$/;



export default function validate(input) {

    const errors = {};

    
    if (!input.name){
        errors.name = 'Se requiere un nombre';
    }
    if (!input.lastName){
        errors.lastName = 'Se requiere un apellido';
    }
    if (!regexEmail.test(input.email)){
       errors.email = 'Debe ser un correo electrónico';
    }
    
    if (!regexLength.test(input.password)) {
        errors.password = 'La contraseña debe tener entre 6 y 10 caracteres';
      }
    if (!regexUppercaseNumber.test(input.password)) {
        errors.password = 'La contraseña debe tener un número y una mayuscula';
      }

    return errors;
}