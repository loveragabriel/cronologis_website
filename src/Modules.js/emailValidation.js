export const formValidation = (newUser) => {
    const errors = {};
if (!newUser.email) {
    errors.email = 'Correo Requerida';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(newUser.email)) {
    errors.email = 'Formato Invalido';
  }
}