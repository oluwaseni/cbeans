import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YearsPage } from './years.page';

const routes: Routes = [
  {
    path: '',
    component: YearsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YearsPageRoutingModule {}
