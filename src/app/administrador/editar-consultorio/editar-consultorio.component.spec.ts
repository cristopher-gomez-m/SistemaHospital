import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarConsultorioComponent } from './editar-consultorio.component';

describe('EditarConsultorioComponent', () => {
  let component: EditarConsultorioComponent;
  let fixture: ComponentFixture<EditarConsultorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarConsultorioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarConsultorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
