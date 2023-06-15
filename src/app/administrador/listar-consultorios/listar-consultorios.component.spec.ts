import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarConsultoriosComponent } from './listar-consultorios.component';

describe('ListarConsultoriosComponent', () => {
  let component: ListarConsultoriosComponent;
  let fixture: ComponentFixture<ListarConsultoriosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarConsultoriosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarConsultoriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
