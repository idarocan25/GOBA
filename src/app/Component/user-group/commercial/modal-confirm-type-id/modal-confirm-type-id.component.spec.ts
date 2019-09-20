import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalConfirmTypeIdComponent } from './modal-confirm-type-id.component';

describe('ModalConfirmTypeIdComponent', () => {
  let component: ModalConfirmTypeIdComponent;
  let fixture: ComponentFixture<ModalConfirmTypeIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalConfirmTypeIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalConfirmTypeIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
