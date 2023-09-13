

const regexEmail = /^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

const regexUppercaseNumber = /^(?=.*[A-Z])(?=.*\d)/;

const regexLength = /^.{6,10}$/;



export default function validate(input) {

    const errors = {};

    
    if (!input.username){
        errors.username = 'Se requiere un Usuario';
    }
    if (!regexEmail.test(input.username)){
       errors.username = 'Debe ser un correo electrónico';
    }
    else if (input.username.length > 34){
        errors.username = 'El Usuario no puede tener mas de 35 caracteres';
    }
    if (!regexLength.test(input.password)) {
        errors.password = 'La contraseña debe tener entre 6 y 10 caracteres';
      }
    if (!regexUppercaseNumber.test(input.password)) {
        errors.password = 'La contraseña debe tener un número y una mayuscula';
      }

    return errors;
}