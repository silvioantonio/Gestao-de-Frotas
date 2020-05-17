
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VeiculoComponent} from './views/veiculo/veiculo.component'
import { CreateComponent } from './views/veiculo/create/create.component';
import { UpdateComponent } from './views/veiculo/update/update.component';
import { DeleteComponent } from './views/veiculo/delete/delete.component';

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
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
