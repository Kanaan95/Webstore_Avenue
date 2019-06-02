import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page.component';
import { SharedModule } from '../shared/shared.module';
import { UsersModule } from '../users/users.module';

@NgModule({
  imports: [
    CommonModule,
    UsersModule,
    SharedModule.forRoot()
  ],
  declarations: [PageComponent],
  exports: [PageComponent]
})
export class PageModule { }
