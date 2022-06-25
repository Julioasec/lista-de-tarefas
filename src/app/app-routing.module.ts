import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/pages/home/home.component";
import { TarefasComponent } from "./components/pages/tarefas/tarefas.component";


const routes: Routes = [
    {path: '', redirectTo: '/home' , pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'tarefas', component: TarefasComponent},
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  