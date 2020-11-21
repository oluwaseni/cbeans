import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PutmePage } from './putme.page';

const routes: Routes = [
  {
    path: '',
    component: PutmePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PutmePageRoutingModule {}
