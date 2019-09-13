import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commercial',
  templateUrl: './commercial.component.html',
  styleUrls: ['./commercial.component.css']
})
export class CommercialComponent implements OnInit {
  hide = true;
  divCustomer = false;
  divCommercial = false;
  dataCustomer = false;
  contactCustomer = false;
  dataCommercial = false;
  contactCommercial = false;


  constructor() { }

  ngOnInit() {
  }

  Commercial() {
    this.hide = false;
    this.divCustomer = true;
    this.divCommercial = false;
    this.dataCustomer = true;
    this.contactCustomer = false;
    this.dataCommercial = false;
    this.contactCommercial = false;
  }

}
