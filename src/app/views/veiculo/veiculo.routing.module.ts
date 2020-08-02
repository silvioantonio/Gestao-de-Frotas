import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VeiculoComponent } from './veiculo.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';

const veiculoRoutes = [
    {path: "veiculos",component: VeiculoComponent},
    {path: "veiculos/create",component: CreateComponent},
    {path: "veiculos/update/:id",component: UpdateComponent},
    {path: "veiculos/delete/:id",component: DeleteComponent},
];

@NgModule({
    imports: [RouterModule.forChild(veiculoRoutes)],
    exports: [RouterModule]
})
export class VeiculoRoutingModule {}