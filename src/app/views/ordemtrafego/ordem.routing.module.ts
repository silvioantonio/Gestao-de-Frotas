import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OrdemComponent } from './ordem.component';
import { CreateOrdemComponent } from './create/create.ordem.component';

const ordemRoutes = [
    {path:'ordem', component: OrdemComponent},
    {path: "ordem/create",component: CreateOrdemComponent},
];

@NgModule({
    imports: [RouterModule.forChild(ordemRoutes)],
    exports: [RouterModule]
})
export class OrdemRoutingModule {}