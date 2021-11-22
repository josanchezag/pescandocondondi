import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepresasComponent } from './represas.component';

describe('RepresasComponent', () => {
  let component: RepresasComponent;
  let fixture: ComponentFixture<RepresasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepresasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
