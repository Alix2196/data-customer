import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { ReactiveFormsModule, FormsModule, FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from "@angular/forms";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
})
export class HomeComponent{

  isFormValid: boolean = true;
  form: FormGroup = new FormGroup({});

  constructor(private readonly fb: FormBuilder, private customerService: CustomerService) {
    this.form = this.fb.group({
      documentType: ["", Validators.required],
      document: ['', [Validators.required, this.lengthValidator(8, 11)]],
    });
  }

  btnBuscar() {
    console.log("Buscar ejecutado con:");
    
    if (this.form.valid) {
      const documentType = this.form.get('documentType')?.value; 
      const document = this.form.get('document')?.value; 
  
      this.customerService.getCustomer(documentType, document).subscribe(
        (response) => {
          console.log('Respuesta del servicio:', response);
        },
        (error) => {
          console.error('Error en la petición:', error);
        }
      );
    } else {
      console.log("Formulario inválido. Corrige los errores antes de buscar.");
    }
  }
  

  validateForm(): void {
    const regex = /^[0-9]{8,11}$/;
    // const isNumberValid = regex.test(this.documentNumber.trim());
    // const isTypeSelected = this.documentType !== ''; 
    // this.isFormValid = isNumberValid && isTypeSelected; 
    // console.log('¿Formulario válido?', this.isFormValid);
  }
  
  lengthValidator(min: number, max: number) {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value ? control.value.toString() : '';
      if (value.length < min || value.length > max) {
        return { lengthError: `La longitud debe estar entre ${min} y ${max} caracteres.` };
      }
      return null;
    };
  }
}
