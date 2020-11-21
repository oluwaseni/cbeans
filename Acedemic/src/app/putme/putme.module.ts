import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PutmePageRoutingModule } from './putme-routing.module';

import { PutmePage } from './putme.page';
import { SheetsComponent } from '../sheets/sheets.component';
import { Angular4PaystackModule } from 'angular4-paystack';
import { NgxPaginationModule, PaginatePipe, PaginationControlsDirective } from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxPaginationModule,
    PutmePageRoutingModule, 
    Angular4PaystackModule.forRoot('pk_test_1d9176b067320ae51978e691d891796935939e6a')
  ],
  declarations: [PutmePage, SheetsComponent]
})
export class PutmePageModule {}
