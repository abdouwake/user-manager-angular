import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './core/public/components/login-page/login/login.component';
import { SignInComponent } from './core/public/components/login-page/sign-in/sign-in.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './core/public/components/login-page/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginFormComponent } from './core/public/components/login-page/login/login-form/login-form.component';
import { SignInFormComponent } from './core/public/components/login-page/sign-in/sign-in-form/sign-in-form.component';
import { FormsModule } from '@angular/forms';
import { ErreurMessageDirective } from './core/public/directives/erreur-message.directive';
import { StrengthPassComponent } from './core/public/components/login-page/sign-in/sign-in-form/strength-pass/strength-pass.component';
import { ListUsersComponent } from './core/public/components/list-users/list-users.component';
import { UserInfoComponent } from './core/public/components/user-info/user-info.component';
import { AuthGuard } from './core/auth/auth.guard';
import { AuthApiService } from './core/services-api/auth-api.service';
import { LoginService } from './core/public/services/login.service';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { HeaderComponent } from './core/public/components/shared-components/header/header.component';
import { SideMenuComponent } from './core/public/components/shared-components/side-menu/side-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StatcardComponent } from './core/public/components/list-users/statcard/statcard.component';
import { UserComponent } from './core/public/components/list-users/user/user.component';
import { PaginationComponent } from './core/public/components/list-users/pagination/pagination.component';
import { UserDetailsComponent } from './core/public/components/user-info/user-details/user-details.component';
import { AddUserComponent } from './core/public/components/list-users/user/add-user/add-user.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign-in', component: SignInComponent },
  {
    path: 'list-users',
    component: ListUsersComponent,
    canActivate: [AuthGuard],
  },
  { path: 'user/:id', component: UserInfoComponent, canActivate: [AuthGuard] },
];

@NgModule({
  declarations: [
    ErreurMessageDirective,
    AppComponent,
    LoginComponent,
    SignInComponent,
    NavbarComponent,
    LoginFormComponent,
    SignInFormComponent,
    ErreurMessageDirective,
    StrengthPassComponent,
    ListUsersComponent,
    UserInfoComponent,
    HeaderComponent,
    SideMenuComponent,
    StatcardComponent,
    UserComponent,
    PaginationComponent,
    UserDetailsComponent,
    AddUserComponent,
  ],
  imports: [
    MatIconModule,
    SweetAlert2Module.forRoot(),
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    NgbModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
