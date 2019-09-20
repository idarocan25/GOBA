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
  hide = true;
  dataCustomer = false;
  contactCustomer = false;
  modalUserGroup = true;

  // Campo De la modal no borrar esto ocasionaria que la modal dejara de funcionar
  closeResult: string;
  customer: string;


  constructor(public DialogService: DialogService,
              private modalService: NgbModal,
              private toastr: ToastrService,
              private router: Router) { }

  ngOnInit() {
  }

  open(content) {
  

    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  access(accessAccount) {
    this.modalService.open(accessAccount, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  Ingresar(){
    const cantidadMinimaCaracteresContrasena = 8;

    if (this.password.length < cantidadMinimaCaracteresContrasena) {
      this.toastr.info('La contraseña debe contener mínimo ocho(8) caracteres', 'Información');
    }

    if(this.user != null && this.user != '' && this.password != null && this.password != ''){
      if(this.password.length > 8){
        this.toastr.success('Ha ingresado Correctamente', 'Operacion Exitosa');
        this.router.navigate(['/user']);
      }else{
        this.toastr.warning('La contraseña debe ser mayor a 8 caracteres','Advertencia')
      }

    } else {
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

  InvokeCustomerComponent(content, contentCustomer) {
    this.modalService.dismissAll(content);

    this.modalService.open(contentCustomer, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });

    // this.router.navigate(['customer']);
  }


  InvokeCommercialComponent(content, contentCommercial) {
    this.modalService.dismissAll(content);

    this.modalService.open(contentCommercial, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });

    // this.router.navigate(['commercial']);
  }


  modalClose(contentLanguage) {
    this.modalService.dismissAll(contentLanguage);
  }

  modalCloseComercial(contentCommercial, confirmTypeId) {
    this.modalService.dismissAll(contentCommercial);

    this.modalService.open(confirmTypeId, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }



}
