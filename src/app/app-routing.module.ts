import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { SampleComponent } from './sample/sample.component';
import { ProductentryComponent } from './productentry/productentry.component';


const routes: Routes = [
  {path:"calculator",
component:CalculatorComponent},{
  path:"test",
  component:SampleComponent,},{
  path:"pdetails",component:ProductentryComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }







                        

