import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-modal-confirm-type-id',
  templateUrl: './modal-confirm-type-id.component.html',
  styleUrls: ['./modal-confirm-type-id.component.css']
})
export class ModalConfirmTypeIdComponent implements OnInit {
  hide = true;
  tipoDocumento: string;
  closeResult: string;

  constructor(private modalService: NgbModal, private toastr: ToastrService) {
   }

  ngOnInit() {
  }

  showmodal(confirmTypeId){
    this.modalService.open(confirmTypeId, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
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

  NextFormCommercial() {
    if (this.tipoDocumento != null) {
      this.hide = false;
    } else {
      this.toastr.warning('Seleccionar el tipo de identificación', 'Verificacion');
    }
  }

  modalClose(successfulUser) {
    this.modalService.dismissAll(successfulUser);
  }

}
