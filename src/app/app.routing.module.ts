import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContentComponent } from './components/template/content/content.component';
import { LoginComponent } from './components/login/login.component';

import { VeiculoComponent} from './views/veiculo/veiculo.component'
import { CreateComponent } from './views/veiculo/create/create.component';
import { UpdateComponent } from './views/veiculo/update/update.component';
import { DeleteComponent } from './views/veiculo/delete/delete.component';

import { OrdemComponent } from './views/ordemtrafego/ordem.component';
import { CreateOrdemComponent } from './views/ordemtrafego/create/create.ordem.component';

const routes: Routes = [
  {path: '',component: ContentComponent},
  {path: 'login',component: LoginComponent},
  {path: "veiculos",component: VeiculoComponent},
  {path: "veiculos/create",component: CreateComponent},
  {path: "veiculos/update/:id",component: UpdateComponent},
  {path: "veiculos/delete/:id",component: DeleteComponent},
  {path: "ordem",component: OrdemComponent},
  {path: "ordem/create",component: CreateOrdemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
