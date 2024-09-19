import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/authentication/login/login.module').then( m => m.LoginPageModule)
  },  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/authentication/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'verification-code',
    loadChildren: () => import('./pages/authentication/verification-code/verification-code.module').then( m => m.VerificationCodePageModule)
  },
  {
    path: 'new-password',
    loadChildren: () => import('./pages/authentication/new-password/new-password.module').then( m => m.NewPasswordPageModule)
  },
  {
    path: 'new-password-confirmation',
    loadChildren: () => import('./pages/authentication/new-password-confirmation/new-password-confirmation.module').then( m => m.NewPasswordConfirmationPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
