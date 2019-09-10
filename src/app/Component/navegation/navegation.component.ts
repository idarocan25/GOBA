import { Component, OnInit } from '@angular/core';
import { DialogService, DialogComponent } from 'ng2-bootstrap-modal';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navegation',
  templateUrl: './navegation.component.html',
  styleUrls: ['./navegation.component.css']
})
export class NavegationComponent implements OnInit {
  // Variables Para Ocultar los Campos
  ocultar: boolean = true;
  DatosGenelaresCliente: boolean = false;
  DatosContactoCliente: boolean = false;
  //Campo De la modal no borrar esto ocasionaria que la modal dejara de funcionar
  closeResult: string;
  // Campos Del Formulario Registro Cliente
  Ruc: string;
  RazonSocial: string;
  Ciudades: string;
  Dirrecion: string;
  Contacto: string;
  TelefonoEmpresa: string;
  ContactoCelular: string;
  CargoContacto: string;
  EmailContacto: string;
  ObjCliente: {};
  ArrayCLiente: [];
  constructor(
    public DialogService: DialogService,
    private modalService: NgbModal,
    private toastr: ToastrService
  ) { }

  ngOnInit() {

  }
  Scliente() {
    if (this.Ruc != null && this.RazonSocial != null && this.Dirrecion != null) {
      this.ocultar = false;
      this.DatosGenelaresCliente = false;
      this.DatosContactoCliente = true;
    } else {
      this.toastr.warning('Por Favor llene los campos Obligatorios *', 'Verificacion');
    }
  }
  Cliente() {
    this.ocultar = false;
    this.DatosGenelaresCliente = true;
    this.DatosContactoCliente = false;
  }
  // antes de enviar los datos por el metodo post se debe generar la contraseña ese metodo no ha sido creado
  FCliente() {
    debugger;
    if (this.Contacto != null && this.TelefonoEmpresa != null && this.CargoContacto != null && this.EmailContacto != null) {
      this.ObjCliente = {
        Ruc: this.Ruc, RazonSocial: this.RazonSocial, Ciudades: this.Ciudades, Dirrecion: this.Dirrecion,
        Contacto: this.Contacto, TelefonoEmpresa: this.TelefonoEmpresa, CargoContacto: this.CargoContacto, EmailContacto: this.EmailContacto
      }
      console.log(this.ObjCliente);
      this.Ruc, this.RazonSocial, this.Ciudades, this.Ciudades, this.Dirrecion, this.Contacto, this.TelefonoEmpresa, this.CargoContacto, this.EmailContacto = ' ';
      this.toastr.success('Usuario Creado Exitosa Mente', 'Operacion Exitosa');
    } else {
      this.toastr.warning('Por Favor llene los campos Obligatorios *', 'Verificacion');
    }
  }
  Cancelar() {
    this.ocultar = true;
    this.DatosGenelaresCliente = false;
    this.DatosContactoCliente = false;
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
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
