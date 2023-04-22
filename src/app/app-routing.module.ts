import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechnologiesComponent } from './technologies/technologies.component';
import { BooksComponent } from './books/books.component';
import { WrongrouteComponent } from './wrongroute/wrongroute.component';

const routes: Routes = [
  {path:'technologies',component : TechnologiesComponent},
  {path:'books', component:BooksComponent},
  {path:'',component:TechnologiesComponent},
  {path:'**',component : WrongrouteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
