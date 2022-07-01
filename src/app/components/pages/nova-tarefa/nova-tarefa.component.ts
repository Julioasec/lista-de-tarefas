import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Status } from 'src/app/enums/Status';
import { TarefasService } from 'src/app/services/tarefas.service';

@Component({
  selector: 'app-nova-tarefa',
  templateUrl: './nova-tarefa.component.html',
  styleUrls: ['./nova-tarefa.component.css']
})
export class NovaTarefaComponent implements OnInit {

  id!: string
  novaTarefa!: FormGroup

  constructor( private tarefasService: TarefasService) { }

  ngOnInit(): void {
    this.id = this.tarefasService.resgatarUltimoId()
    
    this.novaTarefa = new FormGroup({
      id: new FormControl(this.id),
      titulo: new FormControl('', [Validators.required]),
      descricao: new FormControl(''),
      status: new FormControl(Status.pendente)
    })

    
  }

  get titulo(){
    return this.novaTarefa.get('titulo')!;
  }

  get descricao(){
    let formDescricao = this.novaTarefa.get('descricao')?.value
    
    return formDescricao || "Não há uma descrição disponível..."
  }


  criarTarefa(e: Event, formDirective: FormGroupDirective): void{
   if (this.novaTarefa.invalid) {
      return 
    }

    this.tarefasService.criarTarefa(this.novaTarefa.value)
  
    formDirective.resetForm()
    this.novaTarefa.reset()
  }
}
