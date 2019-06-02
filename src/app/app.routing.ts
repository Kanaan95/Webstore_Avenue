import { RouterModule } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { PageComponent } from './page/page.component';

export const appRouting = RouterModule.forRoot(
    [

        {
            path: 'home',
            component: HomeComponent
        }
        ,
        {
            path: 'signup/:id',
            component: SignupComponent
        }
        ,
        {
            path: 'signup',
            component: SignupComponent
        }
        ,
        {
            path: ':id',
            component: PageComponent
        }
        ,
        {
            path: '**',
            redirectTo: 'home'
        }

    ]

);