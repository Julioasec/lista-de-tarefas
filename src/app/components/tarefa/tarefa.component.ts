import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css']
})
export class TarefaComponent implements OnInit {

@Input() layout!: string

  constructor() { }

  ngOnInit(): void {
  }

}
