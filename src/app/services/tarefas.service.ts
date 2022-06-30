import { Injectable } from '@angular/core';
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
        let resposta: Tarefa = JSON.parse(localStorage.getItem(i.toString()) || '')
        tarefas.push(resposta)
    }

    return tarefas;
  }

 resgatarTarefa(): void {

   }
  
 finalizarTarefa(): void{

 }

}
