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



@NgModule({
  declarations: [
    AppComponent,
    NavegationComponent,
    HomePrincipalComponent
  ],
  imports: [
    BrowserModule,
    BootstrapModalModule,
    NgbModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
