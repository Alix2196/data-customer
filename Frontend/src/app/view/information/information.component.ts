import { Component, OnInit } from '@angular/core';
import { DataTransferService } from '../../services/data-transfer.service';
import {
  FormGroup,
  FormsModule,
  FormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'information',
  standalone: true,
  templateUrl: './information.component.html',
  styleUrl: './information.component.scss',
  imports: [ReactiveFormsModule, FormsModule, CommonModule]
})
export class InformationComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  customer: any = {};
  
  constructor(
    private readonly fb: FormBuilder,
    private dataTransferService: DataTransferService,
    private router: Router
  ) {
    this.form = this.fb.group({
      lastName: [{value: '', disabled: true}],
      firstName: [{value:'', disabled: true}]
    });
  }

  ngOnInit(): void {
    console.log(this.dataTransferService.messages);
    this.customer = this.dataTransferService.messages;
     if(this.customer){
        this.form.patchValue({
          lastName:this.customer.lastName,
          firstName:this.customer.firstName
        });
     }else{
        this.router.navigateByUrl('/home');
     }
  }

  btnAtras(){
    this.router.navigateByUrl('/home')
  }
}
