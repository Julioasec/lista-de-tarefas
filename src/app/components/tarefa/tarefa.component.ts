import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Status } from 'src/app/enums/Status';
import { Tarefa } from 'src/app/interfaces/tarefa';
import { TarefasService } from 'src/app/services/tarefas.service';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css']
})
export class TarefaComponent implements OnInit {

@Input() layout!: string
@Input() tarefa!: Tarefa
@Output() atualizarListaDeTarefas: EventEmitter<any> = new EventEmitter()
 
status  = {
  cancelado: Status.cancelado,
  concluido: Status.concluido
}

  constructor(private tarefasService: TarefasService) { }

  ngOnInit(): void { }

  finalizarTarefa(id: string, status: Status): void{
   this.tarefasService.finalizarTarefa(id, status)
   this.atualizarListaDeTarefas.emit()
}


}