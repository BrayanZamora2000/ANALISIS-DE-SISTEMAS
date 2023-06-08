import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertapersonaComponent } from './insertapersona.component';

describe('InsertapersonaComponent', () => {
  let component: InsertapersonaComponent;
  let fixture: ComponentFixture<InsertapersonaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsertapersonaComponent]
    });
    fixture = TestBed.createComponent(InsertapersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
