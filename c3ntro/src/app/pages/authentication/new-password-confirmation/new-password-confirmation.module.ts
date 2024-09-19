import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewPasswordConfirmationPageRoutingModule } from './new-password-confirmation-routing.module';

import { NewPasswordConfirmationPage } from './new-password-confirmation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewPasswordConfirmationPageRoutingModule
  ],
  declarations: [NewPasswordConfirmationPage]
})
export class NewPasswordConfirmationPageModule {}
