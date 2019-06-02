import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { appRouting } from '../app.routing';
import { SignupModule } from '../signup/signup.module';

@NgModule({
  imports: [
    CommonModule,
    SignupModule,
    appRouting
  ],
  declarations: [UsersComponent],
  exports: [UsersComponent]
})
export class UsersModule { }
