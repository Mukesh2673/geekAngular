import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { environment } from 'src/environments/environment';
import {AngularFireModule} from '@angular/fire/compat'
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

import { LoginPageComponent } from './authentication/login-page/login-page.component';
import { RegisterComponent } from './authentication/register/register.component';
// import { UserListComponent } from './modules/user-list/user-list.component';
// import { AddUserComponent } from './modules/add-user/add-user.component';
import { UsersModule } from './modules/users/users.module';
import { ProfileModule } from './modules/profile/profile.module';
import { ForgotPasswordComponent } from './authentication/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './authentication/reset-password/reset-password.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    // UserListComponent,
    // AddUserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    NgbModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    UsersModule,
    ProfileModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
