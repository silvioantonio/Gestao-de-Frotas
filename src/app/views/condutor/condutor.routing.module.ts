import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CondutorComponent } from './condutor.component';
import { CreateCondutorComponent } from './create/create.component';
import { UpdateCondutorComponent } from './update/update.component';
import { DeleteCondutorComponent } from './delete/delete.component';

const condutorRoutes = [
    {path: "condutor", component: CondutorComponent},
    {path: "condutor/create",component: CreateCondutorComponent},
    {path: "condutor/update/:id",component: UpdateCondutorComponent},
    {path: "condutor/delete/:id",component: DeleteCondutorComponent},
];

@NgModule({
  imports: [RouterModule.forChild(condutorRoutes)],
  exports: [RouterModule]
})
export class CondutorRoutingModule {}
