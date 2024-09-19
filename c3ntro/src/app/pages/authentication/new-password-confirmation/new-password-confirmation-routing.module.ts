import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewPasswordConfirmationPage } from './new-password-confirmation.page';

const routes: Routes = [
  {
    path: '',
    component: NewPasswordConfirmationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewPasswordConfirmationPageRoutingModule {}
