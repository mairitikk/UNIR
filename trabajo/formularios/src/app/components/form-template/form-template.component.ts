import { Component } from '@angular/core';

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.css']
})
export class FormTemplateComponent {
  objeto: any = {}
getDataTemplate(form: any) {
  this.objeto = form.value;
  form.resetForm();
}
}
