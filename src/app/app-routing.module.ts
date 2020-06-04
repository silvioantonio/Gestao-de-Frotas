
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VeiculoComponent} from './views/veiculo/veiculo.component'
import { CreateComponent } from './views/veiculo/create/create.component';
import { UpdateComponent } from './views/veiculo/update/update.component';
import { DeleteComponent } from './views/veiculo/delete/delete.component';

import { CondutorComponent} from './views/condutor/condutor.component'
import { CreateCondutorComponent } from './views/condutor/create/create.component';
import { UpdateCondutorComponent } from './views/condutor/update/update.component';
import { DeleteCondutorComponent } from './views/condutor/delete/delete.component';

import { OrdemComponent } from './views/ordemtrafego/ordem.component';

const routes: Routes = [{
  path: "veiculos",
  component: VeiculoComponent
},
{
  path: "veiculos/create",
  component: CreateComponent
},
{
  path: "veiculos/update/:id",
  component: UpdateComponent
},
{
  path: "veiculos/delete/:id",
  component: DeleteComponent
},{
  path: "condutor",
  component: CondutorComponent
},
{
  path: "condutor/create",
  component: CreateCondutorComponent
},
{
  path: "condutor/update/:id",
  component: UpdateCondutorComponent
},
{
  path: "condutor/delete/:id",
  component: DeleteCondutorComponent
},
{
  path: "ordem",
  component: OrdemComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
