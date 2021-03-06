import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { TarefasComponent } from './components/pages/tarefas/tarefas.component';
import { FooterComponent } from './components/footer/footer.component';
import { TarefaComponent } from './components/tarefa/tarefa.component';
import { NovaTarefaComponent } from './components/pages/nova-tarefa/nova-tarefa.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TarefasComponent,
    HomeComponent,
    FooterComponent,
    TarefaComponent,
    NovaTarefaComponent
 ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {

}