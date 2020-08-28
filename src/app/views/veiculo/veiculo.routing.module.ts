import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VeiculoComponent } from './veiculo.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { OrdensVeiculoComponent } from "./ordens/ordens.component";
import { AuthGuard } from 'src/app/guards/auth.guard';

const veiculoRoutes = [
    {path: "veiculos",component: VeiculoComponent, canActivate: [AuthGuard]},
    {path: "veiculos/create",component: CreateComponent, canActivate: [AuthGuard]},
    {path: "veiculos/update/:id",component: UpdateComponent, canActivate: [AuthGuard]},
    {path: "veiculos/delete/:id",component: DeleteComponent, canActivate: [AuthGuard]},
    {path: "veiculos/ordens/:id",component: OrdensVeiculoComponent, canActivate: [AuthGuard]},
];

@NgModule({
    imports: [RouterModule.forChild(veiculoRoutes)],
    exports: [RouterModule]
})
export class VeiculoRoutingModule {}
