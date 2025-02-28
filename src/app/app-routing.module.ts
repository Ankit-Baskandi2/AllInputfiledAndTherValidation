import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestingComponent } from './testing/testing.component';

const routes: Routes = [
  {
    path : '', redirectTo:'form', pathMatch : 'full'
  },
  {
    path : 'form', loadChildren:() => import('./registeration-form/registeration-form.module').then(m => m.RegisterationFormModule)
  },
  {
    path : 'testing',
    component : TestingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
