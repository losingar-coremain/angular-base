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
  public telefono: FormControl;
  public numbers = [];
  public generos = ["Hombre", "Mujer"];

  constructor(private formBuilder: FormBuilder) {
    this.numbers = Array(100)
      .fill(Number)
      .map((x, i) => i + 1)
      .slice(9);

    this.personalDataForm = this.formBuilder.group(
      {
        nombre: ["", [Validators.required]],
        apellidos: ["", [Validators.required]],
        edad: ["", [Validators.required, this.ageValidator]],
        sexo: ["", [Validators.required]],
        DNI: [
          "",
          [
            Validators.required,
            Validators.pattern(/((\d{8})([-]?)([a-zA-Z]))/),
          ],
        ],
        NIE: [
          "",
          [
            Validators.required,
            Validators.pattern(
              /((([X-Z])|([LM])){1}([-]?)((\d){7})([-]?)([a-zA-Z]{1}))/
            ),
          ],
        ],
        CIF: [
          "",
          [
            Validators.required,
            Validators.pattern(/[a-zA-Z]{1}\d{7}[a-zA-Z0-9]{1}/),
          ],
        ],
        email: ["", [Validators.required, Validators.email]],
        telefono: [
          "",
          [
            Validators.required,
            Validators.pattern(
              /^\+?([0-9]{2})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/
            ),
          ],
        ],
        url: [
          "",
          [
            Validators.required,
            Validators.pattern(
              /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/
            ),
          ],
        ],
        password: ["", [Validators.required]],
        confirmacionPass: ["", [Validators.required]],
        company: ["", [Validators.required]],
        tarjeta: [
          "",
          [
            Validators.required,
            Validators.pattern(/^([0-9]{4}( |\-)){3}[0-4]{4}$/),
          ],
        ],
        aceptedTerms: ["", Validators.requiredTrue],
      },
      { validator: this.MustMatch("password", "confirmacionPass") }
    );
  }

  ageValidator(age) {
    if ((age.value < 18 || age.value > 65) && age.value) {
      return { noValido: true };
    } else {
      return null;
    }
  }

  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        // return if another validator has already found an error on the matchingControl
        return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }
}
