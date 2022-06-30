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
  tarefasPendentes!: Tarefa[]
  _listaDeTarefas!: Tarefa[]
  _filtroDoUsuario: string = ''

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
    this._listaDeTarefas = this.tarefasService.resgatarTarefas().filter(tarefa=>{
      return tarefa.status === Status.pendente       
    })

    this.tarefasPendentes = this._listaDeTarefas
  }
   
  set filtro(valor: string){
    this._filtroDoUsuario = valor

    this._listaDeTarefas = this.tarefasPendentes.filter(tarefa=>{
      return tarefa.titulo.toLocaleLowerCase().includes(this._filtroDoUsuario.toLocaleLowerCase())
    })
  }

  get filtro(){
    return this._filtroDoUsuario
  }
    

  }
