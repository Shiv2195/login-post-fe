import { Routes, RouterModule } from '@angular/router';

// import { HomeComponent } from './home';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { PostComponent } from './post/post.component';
// import { AuthGuard } from './_helpers';

const routes: Routes = [
    { path: 'signin', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'create', component: CreatePostComponent },
    { path: 'home', component: PostComponent },

  //  otherwise redirect to signin
    { path: '**', redirectTo: '/signin',pathMatch:'full' }
];

export const appRoutingModule = RouterModule.forRoot(routes);