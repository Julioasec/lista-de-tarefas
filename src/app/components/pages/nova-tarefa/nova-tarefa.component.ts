import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Status } from 'src/app/enums/Status';
import { Tarefa } from 'src/app/interfaces/tarefa';
import { TarefasService } from 'src/app/services/tarefas.service';

@Component({
  selector: 'app-nova-tarefa',
  templateUrl: './nova-tarefa.component.html',
  styleUrls: ['./nova-tarefa.component.css']
})
export class NovaTarefaComponent implements OnInit {

  novaTarefa!: FormGroup

  constructor( private tarefasService: TarefasService) { }

  ngOnInit(): void {
    this.novaTarefa = new FormGroup({
      id: new FormControl(''),
      titulo: new FormControl('', [Validators.required]),
      descricao: new FormControl(''),
      status: new FormControl('')
    })
  }

  get titulo(){
    return this.novaTarefa.get('titulo')!;
  }

  get descricao(){
    let formDescricao = this.novaTarefa.get('descricao')?.value
    
    return formDescricao || "Não há uma descrição disponível..."
  }


  criarTarefa(evento: Event): void{
   if (this.novaTarefa.invalid) {
      return 
    }

    let id = this.tarefasService.resgatarUltimoId()    
    this.novaTarefa.patchValue({id})
    this.novaTarefa.patchValue({descricao: this.descricao})
    this.novaTarefa.patchValue({status: Status.pendente})
    
    this.tarefasService.criarTarefa(this.novaTarefa.value)
  }
}
