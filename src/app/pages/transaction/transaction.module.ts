import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransactionPageRoutingModule } from './transaction-routing.module';

import { TransactionPage } from './transaction.page';
import {AgencePageModule} from '../agence/agence.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        TransactionPageRoutingModule,
        AgencePageModule
    ],
  declarations: [TransactionPage]
})
export class TransactionPageModule {}
