import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  hide = true;

  // Formulario dataCustomer
  dataCustomer = false;
  ruc: string;
  businessName: string;
  cities: string;
  address: string;

// Formulario contactCustomer
  contactCustomer = false;
  nameContact: string;
  companyPhone: string;
  cellContact: string;
  contactCharge: string;
  emailContact: string;
  ObjCliente: {};

  // Modal Guardo Exitoso
  successfulUser = false;

  divCustomer = false;
  divCommercial = false;

  dataCommercial = false;
  contactCommercial = false;
  closeResult: string;

  constructor(private modalService: NgbModal, private toastr: ToastrService) {
  }

  ngOnInit() {
  }

  open(successfulUser) {
    this.modalService.open(successfulUser, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
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

  NextFormCustomer() {
    if (this.ruc != null && this.businessName != null && this.address != null) {
      this.hide = false;
      this.dataCustomer = true;
      this.contactCustomer = true;
      this.dataCommercial = false;
      this.contactCommercial = true;
    } else {
      this.toastr.warning('Por Favor llene los campos Obligatorios *', 'Verificacion');
    }
  }

  ReturnDataCustomer() {
    this.dataCustomer = false;
    this.contactCustomer = false;
  }

  modalClose(successfulUser) {
    this.modalService.dismissAll(successfulUser);
  }
}
