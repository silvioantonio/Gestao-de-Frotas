import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CondutorComponent } from './condutor.component';
import { CreateCondutorComponent } from './create/create.component';
import { UpdateCondutorComponent } from './update/update.component';
import { DeleteCondutorComponent } from './delete/delete.component';
import { AuthGuard } from 'src/app/guards/auth.guard';

const condutorRoutes = [
    {path: "condutor", component: CondutorComponent, canActivate: [AuthGuard]},
    {path: "condutor/create",component: CreateCondutorComponent, canActivate: [AuthGuard]},
    {path: "condutor/update/:id",component: UpdateCondutorComponent, canActivate: [AuthGuard]},
    {path: "condutor/delete/:id",component: DeleteCondutorComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(condutorRoutes)],
  exports: [RouterModule]
})
export class CondutorRoutingModule {}
