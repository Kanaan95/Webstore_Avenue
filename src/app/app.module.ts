import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { HomeModule } from './home/home.module';
import { appRouting } from './app.routing';
import { SharedModule } from './shared/shared.module';
import { HttpModule } from '@angular/http';
import { SignupModule } from './signup/signup.module';
import { UsersModule } from './users/users.module';
import { PageModule } from './page/page.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    SharedModule.forRoot(),
    HomeModule,
    PageModule,
    appRouting
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
