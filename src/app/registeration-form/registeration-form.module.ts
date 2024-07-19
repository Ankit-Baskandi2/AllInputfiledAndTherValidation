import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { RegisterationFormRoutingModule } from './registeration-form-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    CommonModule,
    RegisterationFormRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule
  ]
})

export class RegisterationFormModule { }
