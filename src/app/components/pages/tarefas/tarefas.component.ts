import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Status } from 'src/app/enums/Status';
import { Tarefa } from 'src/app/interfaces/tarefa';
import { TarefasService } from 'src/app/services/tarefas.service';




@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})
export class TarefasComponent implements OnInit {

  layout = 'lista';
  _listaDeTarefas!: Tarefa[]
  tarefasPendentes!: Tarefa[]


  constructor(private router:Router, private tarefasService: TarefasService) {}


  ngOnInit(): void {
    this.resgatarTarefas()    
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
  }

  resgatarTarefas(): void{
    this._listaDeTarefas = this.tarefasService.resgatarTarefas()
    this.tarefasPendentes = this._listaDeTarefas.filter(tarefa=>{
      return tarefa.status === Status.pendente       
    })   
  }
   
  

  }
