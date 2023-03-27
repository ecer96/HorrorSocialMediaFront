import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { StoriesComponent } from './stories/stories.component';

const routes: Routes = [
    {path:'Stories',component:StoriesComponent},
    {path:'Login',component:LoginFormComponent},
    {path:'Register',component:RegisterFormComponent},
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
