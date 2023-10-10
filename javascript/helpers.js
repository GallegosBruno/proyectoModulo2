export const campoRequerido = (input, min, max) => {
  if (
    input.value.trim().length > 0 &&
    input.value.length <= max &&
    input.value.length >= min
  ) {
    console.log("cumple cond")
    input.className = "form-control is-valid";
    return true;
  } else {
    input.className = "form-control is-invalid";
    return false;
  }
};
 


export const validarMail = (input) => {
  const validacion = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  if (validacion.test(input.value) && input.value.trim().length > 0) {
    input.className = "form-control is-valid";

    return true;
  } else {
    input.className = "form-control is-invalid";

    return false;
  }
};


export function sumarioValidaciones (campoMail,campoAsunto,campoDescripcion){
  let mensaje ='';
  if(!validarMail(campoMail))
  {
    mensaje +='El mail debe ser del formato nombre@ejmplo.com <br>'
  }
  if(!campoRequerido(campoMail,5,50)){
    console.log('campoMail')
    mensaje += 'El mail debe contener entre 5 y 50 caracteres <br>';
  }
  if(!campoRequerido(campoAsunto,5,50)){
    mensaje += 'El asunto debe contener entre 5 y 10 caracteres <br>';
  }
  if(!campoRequerido(campoDescripcion,10,1000)){
    mensaje+='La descripcion debe contener entre 10 y 1000 caracteres <br>'
  }
  if(mensaje.length!==0){
    return mensaje;
  }else{
    return '';
  }
}
