import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YearsPageRoutingModule } from './years-routing.module';

import { YearsPage } from './years.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YearsPageRoutingModule
  ],
  declarations: [YearsPage]
})
export class YearsPageModule {}
