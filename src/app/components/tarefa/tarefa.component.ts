import { Component, Input, OnInit } from '@angular/core';
import { Tarefa } from 'src/app/interfaces/tarefa';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css']
})
export class TarefaComponent implements OnInit {

@Input() layout!: string
@Input() id!: string
@Input() titulo!: string
@Input() descricao!: string

  constructor() { }

  ngOnInit(): void {
  }

}
