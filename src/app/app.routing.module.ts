import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContentComponent } from './components/template/content/content.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: '',component: ContentComponent},
  {path: 'login',component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
