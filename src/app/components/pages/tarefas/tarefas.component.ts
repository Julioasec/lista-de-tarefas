import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';




@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})
export class TarefasComponent implements OnInit {

  layout = 'lista';

  constructor(private router:Router) {}


  ngOnInit(): void {
  }

  alterarLayout(layout:string):void{
      this.layout = layout
  }

  onResize(): void{
    let largura = window.innerWidth
    
    if(largura <=500){

      if(this.layout === 'solo'){
        this.layout = 'lista'
      }
    }
    
    if(largura <=800){
      
      if(this.layout === 'par'){
        this.layout = 'solo'
      }
    }

    
    console.log(this.layout);
    
  }
   
  

  }
