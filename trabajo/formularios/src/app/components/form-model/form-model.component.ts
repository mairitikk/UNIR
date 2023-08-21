import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { repeat } from 'rxjs';

@Component({
  selector: 'app-form-model',
  templateUrl: './form-model.component.html',
  styleUrls: ['./form-model.component.css']
})
export class FormModelComponent {

  formModel: FormGroup;

  constructor(){
  this.formModel = new FormGroup({
    nombre: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    email: new FormControl('', [
      Validators.email,
      /*Validators.required*/
      Validators.pattern(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)
    ]),
    edad: new FormControl('', [
      this.edadValidator
    ]),
    dni: new FormControl('', [
      this.dniValidator
    ]),
    password: new FormControl('', []),
    repeatpassword: new FormControl('', [])
  }, []);
}
dniValidator(controlName: AbstractControl): any {

  //validar que dni esta bien escrito 8 numeros y un letra en mayusculas. Lo voy a comprobar con una expresion regular.

  const letrasDni: string[] = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];

  const dni = controlName.value;

  const exp = /^\d{8}[A-Z]{1}/



  if (exp.test(dni)) {

    //el dni esta bien y solo hay que comprobar la letra

    const letra: string = dni.at(-1);

    const numero: number = parseInt(dni.substring(0, dni.length - 1))



    const position: number = numero % 23;



    return (letra !== letrasDni[position]) ? { 'dnivalidator': 'La letra no corresponde con el dni' } : null



  } else {

    return { 'dnivalidator': 'formato del dni incorrecto' }

  }



  //Un dni es valido si divido solo la parte numerica del dni por 23 y el resto de esa división es la posicion de una letra dentro de un array. 



}

edadValidator(controlName: AbstractControl): any {
  //podemos hacer la logica qie ceramos, un rango de edad º

  const edad: number = parseInt(controlName.value);
  if(isNaN(edad)){
return {'edadvalidator': 'No es numero'}
  }else if(edad < 18 || edad > 65){
    return{ 'edadvalidator': 'rango de edad 18 y 65'}

  }
  return null
}
getDataForm(){
  console.log(this.formModel.value);
  //vacia el form
this.formModel.reset();
}
checkControl(formcontrolName: string, validator: string):boolean |undefined
{
  return this.formModel.get(formcontrolName)?.hasError(validator) && this.formModel.get(formcontrolName)?.touched
}
}
