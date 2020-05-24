import {RouterModule, Routes} from '@angular/router';
// import { HomeComponent } from './home';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {CreateTaskComponent} from './create-task/create-task.component';
import {TasksComponent} from './task/tasks.component';
// import { AuthGuard } from './_helpers';

const routes: Routes = [
    { path: 'signin', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'create', component: CreateTaskComponent },
    { path: 'home', component: TasksComponent },

  //  otherwise redirect to signin
    { path: '**', redirectTo: '/signin',pathMatch:'full' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
