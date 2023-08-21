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
    dni: new FormControl('', []),
    password: new FormControl('', []),
    repeatpassword: new FormControl('', [])
  }, []);
}

edadValidator(controlName: AbstractControl){
  //podemos hacer la logica qie ceramos, un rango de edad º
return {}
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
