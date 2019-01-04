import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFormComponent } from './components/user-form/user-form.component';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

@NgModule({
  declarations: [
    UserFormComponent
  ],
  imports: [
    CommonModule
    , ReactiveFormsModule
  ],
  exports: [
    UserFormComponent
  ]
})
export class SharedModule { }
