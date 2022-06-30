import { Injectable } from '@angular/core';
import { Status } from '../enums/Status';
import { Tarefa } from '../interfaces/tarefa';

@Injectable({
  providedIn: 'root'
})
export class TarefasService {

layout = 'lista';

  constructor() { }

  // CRUD
   
  //Create
  criarTarefa(): void{

  }

  //Read
  resgatarTarefas(): Tarefa[]{
    let tarefas: Tarefa[] = []
    let localStorageLength = localStorage.length -1

    for(let i = 0; i<= localStorageLength; i++){
        let resposta = this.resgatarTarefa(i.toString())
        tarefas.push(resposta)
    }

    return tarefas;
  }

 resgatarTarefa(id:string): Tarefa {
    return JSON.parse(localStorage.getItem(id) || '')
   }
  

 finalizarTarefa(id: string, status: Status): void{
    let tarefa = this.resgatarTarefa(id)
    tarefa.status = status
    localStorage.setItem(id, JSON.stringify(tarefa))
 }

}
