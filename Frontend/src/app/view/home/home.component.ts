import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DataTransferService } from '../../services/data-transfer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
})
export class HomeComponent {
  isFormValid: boolean = true;
  form: FormGroup = new FormGroup({});
  showAlert: boolean = false;

  constructor(
    private readonly fb: FormBuilder,
    private customerService: CustomerService,
    private dataTransferService: DataTransferService,
    private router: Router
  ) {
    this.form = this.fb.group({
      documentType: ['', Validators.required],
      document: ['', [Validators.required, this.lengthValidator(8, 11)]],
    });

    this.form.get('document')?.valueChanges.subscribe((value) => {
      if (value) {
        const numericValue = value.replace(/,/g, ''); 
        const formattedValue = new Intl.NumberFormat('en-US').format(
          Number(numericValue)
        );
        this.form
          .get('document')
          ?.setValue(formattedValue, { emitEvent: false }); 
      }
    });
  }

  btnBuscar() {
    console.log('Buscar ejecutado con:');
    if (this.form.valid) {
      const documentType = this.form.get('documentType')?.value;
      const document = this.form.get('document')?.value.replace(/,/g,"");

      this.customerService.getCustomer(documentType, document).subscribe({
        next: (response) => {
          console.log('Respuesta del servicio:', response);
          this.dataTransferService.add(response);
          this.router.navigateByUrl('/information');
        },
        error: (error) => {
          console.error('Error en la petición:', error);
          this.showAlert = true;
        },
      });
    } else {
      console.log('Formulario inválido. Corrige los errores antes de buscar.');
    }
  }

  lengthValidator(min: number, max: number) {
    return (control: AbstractControl): ValidationErrors | null => {
      const rawValue = control.value ? control.value.toString().replace(/,/g, '') : ''; // Quitar comas
      if (rawValue.length < min || rawValue.length > max) {
        return {
          lengthError: `La longitud debe estar entre ${min} y ${max} caracteres.`,
        };
      }
      return null;
    };
  }
}
