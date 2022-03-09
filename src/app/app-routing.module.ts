import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dash-board/dash-board.component';
import { FormComponent } from './form/form.component';
const routes: Routes = [
  {path:'',redirectTo:'/dashboard', pathMatch:'full'},
  {path:"dashboard",component:DashboardComponent},
  {path:"form",component:FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
