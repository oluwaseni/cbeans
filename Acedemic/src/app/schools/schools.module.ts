import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SchoolsPageRoutingModule } from './schools-routing.module';

import { SchoolsPage } from './schools.page';
import { SheetsComponent } from '../sheets/sheets.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SchoolsPageRoutingModule
  ],
  declarations: [SchoolsPage, SheetsComponent]
})
export class SchoolsPageModule {}
