import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) {
    
    
  }
  
  ngOnInit(): void {
    this.redirect()
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

}