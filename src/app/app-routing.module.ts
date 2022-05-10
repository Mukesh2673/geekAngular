import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './authentication/login-page/login-page.component';
import { RegisterComponent } from './authentication/register/register.component';
import { HoriFullLayoutComponent } from './shared/components/hori-full-layout/hori-full-layout.component';
import { ContentStyleComponent } from './shared/components/layouts/content-style/content-style.component';
import { ErrorStyleComponent } from './shared/components/layouts/error-style/error-style.component';
import { FullContentComponent } from './shared/components/layouts/full-content/full-content.component';
import { custom_content } from './shared/routes/custom-content-router';
import { error_content } from './shared/routes/error-content-router';
import { full_content } from './shared/routes/full-content-router';

import { ForgotPasswordComponent } from './authentication/forgot-password/forgot-password.component';

const routes: Routes = [
  { path: '', redirectTo:'auth/login', pathMatch: 'full'},
  { path: 'auth/login', component: LoginPageComponent },
  { path: 'auth/register', component: RegisterComponent },
  { path: 'auth/forgot-password',component:ForgotPasswordComponent},
  { path: '', component: FullContentComponent, children: full_content },
  // { path: '', component: HoriFullLayoutComponent, children: full_content },
  { path: '', component: ErrorStyleComponent, children: error_content },
  { path: '', component: ContentStyleComponent, children: custom_content },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [[RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled'
  })],
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
