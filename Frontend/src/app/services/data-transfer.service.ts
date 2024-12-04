import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  messages: any;

  add(message:any){
    this.messages = message;
  }

  clear(){
    this.messages = undefined;
  }

}
