import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import {
  FormGroup,
  ReactiveFormsModule,
  Validators,
  FormBuilder,
  FormsModule,
} from "@angular/forms";

@Component({
  selector: 'home',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
 
})
export class HomeComponent implements OnInit {

  constructor(private customerService: CustomerService){}
  
  ngOnInit(): void {
    this.customerService.getCustomer("C", 23445322 ).subscribe((response)=>{
      console.log(response);      
    })
  }

  btnBuscar(){
    console.log("funciona!!!");
  }
}
