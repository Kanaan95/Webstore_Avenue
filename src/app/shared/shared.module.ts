import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { appRouting } from '../app.routing';
import { ItemComponent } from './item/item.component';

@NgModule({
  imports: [
    CommonModule,
    appRouting
  ],
  declarations: [HeaderComponent, ItemComponent],
  exports: [HeaderComponent, ItemComponent]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: []
    }
  }
}
