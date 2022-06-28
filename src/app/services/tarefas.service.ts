import { LocationStrategy } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TarefasService {

layout = 'lista';

  constructor() { }


  alterarLayout(layout:string): void{
      this.layout = layout;
    
}

}
