import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OrdemComponent } from './ordem.component';
import { CreateOrdemComponent } from './create/create.ordem.component';
import { AuthGuard } from 'src/app/guards/auth.guard';

const ordemRoutes = [
    {path:'ordem', component: OrdemComponent, canActivate: [AuthGuard]},
    {path: "ordem/create",component: CreateOrdemComponent, canActivate: [AuthGuard]},
];

@NgModule({
    imports: [RouterModule.forChild(ordemRoutes)],
    exports: [RouterModule]
})
export class OrdemRoutingModule {}
