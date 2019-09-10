import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Dependencia para alertar
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//
import { AppComponent } from './app.component';
import { NavegationComponent } from './Component/navegation/navegation.component';
import { HomePrincipalComponent } from './Component/home-principal/home-principal.component';
// Dependecias para la modal//
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// Dependecia para utilizar ngmodel en los formularios
import { FormsModule } from '@angular/forms';
//Modulo de Rutas
import {Routes, RouterModule,} from '@angular/router';
import { HomeUserComponent } from './Component/home-user/home-user.component';
const rutas = [
              {path:'',component:HomePrincipalComponent },
              {path:'user', component: HomeUserComponent}

            ];

@NgModule({
  declarations: [
    AppComponent,
    NavegationComponent,
    HomePrincipalComponent,
    HomeUserComponent
  ],
  imports: [
    BrowserModule,
    BootstrapModalModule,
    NgbModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(rutas)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
