import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarConsultorioComponent } from './agregar-consultorio.component';

describe('AgregarConsultorioComponent', () => {
  let component: AgregarConsultorioComponent;
  let fixture: ComponentFixture<AgregarConsultorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarConsultorioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarConsultorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
