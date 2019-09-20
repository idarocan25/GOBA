import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Dependencia para alertar
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//
import { AppComponent } from './app.component';
import { NavegationComponent } from './Component/navegation/navegation.component';
import { HomePrincipalComponent } from './Component/home-principal/home-principal.component';

// Reference Material Angular
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';


// Dependecias para la modal//
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// Dependecia para utilizar ngmodel en los formularios
import { FormsModule } from '@angular/forms';
// Modulo de Rutas
import { Routes, RouterModule } from '@angular/router';
import { HomeUserComponent } from './Component/home-user/home-user.component';
import { NoticiasComponent } from './Component/home-principal/noticias/noticias.component';
import { ContactenosComponent } from './Component/home-principal/contactenos/contactenos.component';
import { FaqComponent } from './Component/home-principal/faq/faq.component';
import { ProcesosComponent } from './component/home-principal/procesos/procesos.component';
import { QuienesSomosComponent } from './component/home-principal/quienes-somos/quienes-somos.component';
import { UserGroupComponent } from './Component/user-group/user-group.component';
import { CustomerComponent } from './Component/user-group/customer/customer.component';
import { CommercialComponent } from './Component/user-group/commercial/commercial.component';
import { ModalConfirmTypeIdComponent } from './Component/user-group/commercial/modal-confirm-type-id/modal-confirm-type-id.component';
import { NaturalPersonComponent } from './Component/user-group/commercial/natural-person/natural-person.component';
import { LegalPersonComponent } from './Component/user-group/commercial/legal-person/legal-person.component';
import { ModalService } from './Component/user-group/commercial/modal.service';
const rutas = [
  // { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '', component: HomePrincipalComponent },
  { path: 'user', component: HomeUserComponent },
  { path: 'noticias', component: NoticiasComponent },
  { path: 'contactenos', component: ContactenosComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'procesos', component: ProcesosComponent },
  { path: 'quienesSomos', component: QuienesSomosComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'commercial', component: CommercialComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavegationComponent,
    HomePrincipalComponent,
    HomeUserComponent,
    NoticiasComponent,
    ContactenosComponent,
    FaqComponent,
    ProcesosComponent,
    QuienesSomosComponent,
    UserGroupComponent,
    CustomerComponent,
    CommercialComponent,
    ModalConfirmTypeIdComponent,
    NaturalPersonComponent,
    LegalPersonComponent
  ],
  imports: [
    BrowserModule,
    BootstrapModalModule,
    NgbModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatInputModule,
    FormsModule,
    RouterModule.forRoot(rutas)
  ],
  exports: [RouterModule],
  providers: [ ModalService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
