import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Status } from 'src/app/enums/Status';
import { Tarefa } from 'src/app/interfaces/tarefa';
import { TarefasService } from 'src/app/services/tarefas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tarefasPendentesLength!: number

  constructor(private router: Router, private tarefasService: TarefasService) {
    
    
  }
  
  ngOnInit(): void {
    this.redirect()
    this.resgatarQuantidadeDeTarefas()
    
  }

  onResize():void{
    this.redirect()
  }

  redirect():void{
    let janelaLargura = window.innerWidth
    if(janelaLargura<=450){
      this.router.navigate(['/tarefas'])
    }
  }

  resgatarQuantidadeDeTarefas(): void{
    this.tarefasPendentesLength = this.tarefasService.resgatarTarefas().filter(tarefa =>{
      return tarefa.status === Status.pendente
    }).length
  }

}