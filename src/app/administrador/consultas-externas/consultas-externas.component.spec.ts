import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultasExternasComponent } from './consultas-externas.component';

describe('ConsultasExternasComponent', () => {
  let component: ConsultasExternasComponent;
  let fixture: ComponentFixture<ConsultasExternasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultasExternasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultasExternasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
