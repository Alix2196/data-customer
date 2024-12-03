import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private basePath="http://localhost:8090"

  constructor(private http:HttpClient) { }

  getCustomer(documentType:string, document:number){
    return this.http.get(`${this.basePath}/customer?documentType=${documentType}&document=${document}`)
  }
  
}
