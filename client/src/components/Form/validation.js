


const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;




export default function validate(input) {

  const errors = {};


  if (!input.name) {
    errors.name = 'Se requiere un nombre';
  }
  if (!input.lastName) {
    errors.lastName = 'Se requiere un apellido';
  }
  if (!urlPattern.test(input.image)) {
    errors.image = 'Debe ser una URL';
  }

  if (!input.nationality.length) {
    errors.nationality = 'Debe tener una Nacionalidad';
  }

  if (input.description.length < 1) {
    errors.description = 'Se necesita una descripción'
  }


  return errors;
}