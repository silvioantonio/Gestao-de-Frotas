import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContentComponent } from './components/template/content/content.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: '', component: ContentComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'condutor', loadChildren: () => import('./views/condutor/condutor.module').then(m => m.CondutorModule)},
  {path: 'veiculos', loadChildren: () => import('./views/veiculo/veiculo.module').then(m => m.VeiculoModule)},
  {path: 'ordem', loadChildren: () => import('./views/ordemtrafego/ordem.module').then(m => m.OrdemModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
