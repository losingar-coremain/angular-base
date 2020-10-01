import { Component } from "@angular/core";
import {
  EmailValidator,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { error } from "protractor";

@Component({
  selector: "app-post-form",
  templateUrl: "post.form.component.html",
  styleUrls: ["post.form.component.css"],
})
export class PostFormComponent {
  public personalDataForm: FormGroup;
  public numbers = [];
  public generos = ["Hombre", "Mujer"];
  constructor(private formBuilder: FormBuilder) {
    this.numbers = Array(100)
      .fill(Number)
      .map((x, i) => i + 1)
      .slice(9);
    this.personalDataForm = this.formBuilder.group({
      nombre: ["", [Validators.required]],
      apellidos: ["", [Validators.required]],
      edad: ["", [Validators.required, this.AgeValidator]],
      sexo: ["", [Validators.required]],
      DNI: ["", [Validators.required]],
      NIF: ["", [Validators.required]],
      CIF: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      telefono: ["", Validators.required],
      url: ["", [Validators.required]],
      password: ["", [Validators.required]],
      confirmacionPass: ["", [Validators.required]],
      company: ["", [Validators.required]],
      tarjeta: ["", [Validators.required]],
      aceptedTerms: ["", Validators.required, Validators.requiredTrue],
    });
  }

  AgeValidator(age) {
    console.log(age.value);
    if (age.value < 18 || age.value > 65) {
      return { noValido: true };
    } else {
      return null;
    }
  }
}
// - Nombre (campo obligatorio)
// - Apellidos (campo obligatorio)
// - Edad (campo seleccionable obligatorio, valores entre 10 y 99, mínimo 18 años, máximo 65)
// - Sexo (campo seleccionable obligatorio, valores H/M)
// - DNI (campo obligatorio, formato de dni válido)
// - NIF (campo obligatorio, formato de gif válido)
// - Email (campo obligatorio, formato de email válido)
// - Teléfono (campo obligatorio, formato de teléfono válido)
// - URL (campo obligatorio, formato de url válida)
// - Contraseña (campo obligatorio, mínimo 8 caracteres)
// - Confirma contraseña (campo obligatorio, mínimo 8 caracteres)
// - Compañía (campo obligatorio)
// - CIF (campo obligatorio, formato de cif válido)
// - Tarjeta de crédito (campo obligatorio, formato de tarjeta válido)
// - Checkbox Acepto términos y condiciones (campo obligatorio a true)
