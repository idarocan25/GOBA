import { Component, OnInit } from '@angular/core';
import { DialogService, DialogComponent } from 'ng2-bootstrap-modal';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navegation',
  templateUrl: './navegation.component.html',
  styleUrls: ['./navegation.component.css']
})
export class NavegationComponent implements OnInit {

  // variables Login//
  user: string;
  password: string;

  // Variables Para Ocultar los Campos
  ocultar: boolean = true;
  DatosGenelaresCliente: boolean = false;
  DatosContactoCliente: boolean = false;
  UsuarioExitoso : boolean = false;
  //Campo De la modal no borrar esto ocasionaria que la modal dejara de funcionar
  closeResult: string;
  // Campos Del Formulario Registro Cliente
  Ruc: string;
  RazonSocial: string;
  Ciudades: string;
  Direccion: string;
  Contacto: string;
  TelefonoEmpresa: string;
  ContactoCelular: string;
  CargoContacto: string;
  EmailContacto: string;
  ObjCliente: {};

  divAliado: boolean = false;
  divCliente: boolean = true;

  //Variables para ocultar Modales Cliente vs Aliado
  DatosGenelaresAliado: boolean = false;
  DatosContactoAliado: boolean = false;
  UsuarioAliadoExitoso : boolean = false;


  constructor(
    public DialogService: DialogService,
    private modalService: NgbModal,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {

  }
  Scliente() {
    if (this.Ruc != null && this.RazonSocial != null && this.Direccion != null) {
      this.ocultar = false;
      this.DatosGenelaresCliente = false;
      this.DatosContactoCliente = true;
      this.DatosGenelaresAliado = false;
      this.DatosContactoAliado = true;
    } else {
      this.toastr.warning('Por Favor llene los campos Obligatorios *', 'Verificacion');

    }
  }
  Cliente() {
    this.ocultar = false;
    this.divCliente = true;
    this.divAliado = false;
    this.DatosGenelaresCliente = true;
    this.DatosContactoCliente = false;
    this.DatosGenelaresAliado = false;
    this.DatosContactoAliado = false;
  }

  Aliado() {
    this.ocultar = false;
    this.divCliente = false;
    this.divAliado = true;
    this.DatosGenelaresCliente = false;
    this.DatosContactoCliente = false;
    this.DatosGenelaresAliado = true;
    this.DatosContactoAliado = false;
  }

  // antes de enviar los datos por el metodo post se debe generar la contraseña ese metodo no ha sido creado
  FCliente() {
    debugger;
    if (this.Contacto != null && this.TelefonoEmpresa != null && this.CargoContacto != null && this.EmailContacto != null) {
      this.ObjCliente = {
        Ruc: this.Ruc, RazonSocial: this.RazonSocial, Ciudades: this.Ciudades, Direccion: this.Direccion,
        Contacto: this.Contacto, TelefonoEmpresa: this.TelefonoEmpresa, CargoContacto: this.CargoContacto, EmailContacto: this.EmailContacto
      }

      this.ocultar = false;
      this.DatosGenelaresCliente = false;
      this.DatosContactoCliente = false;
      this.UsuarioExitoso = true;

      this.DatosGenelaresAliado = false;
      this.DatosContactoAliado = false;
      //this.UsuarioAliadoExitoso = true;


      console.log(this.ObjCliente);
      this.Ruc, this.RazonSocial, this.Ciudades, this.Ciudades, this.Direccion, this.Contacto, this.TelefonoEmpresa, this.CargoContacto, this.EmailContacto = ' ';
      this.toastr.success('Usuario Creado Exitosa Mente', 'Operacion Exitosa');
    } else {
      this.toastr.warning('Por Favor llene los campos Obligatorios *', 'Verificacion');
    }
  }

  FAliado() {
    debugger;
    if (this.Contacto != null && this.TelefonoEmpresa != null && this.CargoContacto != null && this.EmailContacto != null) {
      this.ObjCliente = {
        Ruc: this.Ruc, RazonSocial: this.RazonSocial, Ciudades: this.Ciudades, Direccion: this.Direccion,
        Contacto: this.Contacto, TelefonoEmpresa: this.TelefonoEmpresa, CargoContacto: this.CargoContacto, EmailContacto: this.EmailContacto
      }

      this.ocultar = false;
      this.DatosGenelaresAliado = false;
      this.DatosContactoAliado = false;
      this.UsuarioAliadoExitoso = true;


      console.log(this.ObjCliente);
      this.Ruc, this.RazonSocial, this.Ciudades, this.Ciudades, this.Direccion, this.Contacto, this.TelefonoEmpresa, this.CargoContacto, this.EmailContacto = ' ';
      this.toastr.success('Usuario Creado Exitosa Mente', 'Operacion Exitosa');
    } else {
      this.toastr.warning('Por Favor llene los campos Obligatorios *', 'Verificacion');
    }
  }

  Cancelar() {
    this.ocultar = true;
    this.DatosGenelaresCliente = false;
    this.DatosContactoCliente = false;
    this.DatosGenelaresAliado = false;
    this.DatosContactoAliado = false;
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  acceder(accederCuenta) {
    this.modalService.open(accederCuenta, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  Ingresar(){
    debugger;
    if(this.user != null && this.user != '' && this.password != null && this.password != ''){
      if(this.password.length > 8){
        this.toastr.success('Ha ingresado Correctamente', 'Operacion Exitosa');
        this.router.navigate(['/user']);
      }else{
        this.toastr.warning('La contraseña debe ser mayor a 8 caracteres','Advertencia')
      }

    }else{
      this.toastr.warning('Debe ingresar  los datos obligatorios *','Advertencia');
    }
  }


  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
